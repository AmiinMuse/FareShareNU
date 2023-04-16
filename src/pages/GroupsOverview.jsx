import React from "react";

import './GroupsOverview.css'


const getUserGroups = async (userId) => {
    try {
      const { data, error } = await supabase
        .from("groups")
        .select("*")
        
  
      if (error) {
        throw error;
      }
  
      const userGroups = data.filter((group) => {
        const members = group.members || [];
        return members.includes(userId);
      });
  
      return userGroups;
    } catch (error) {
      console.log(error.message);
    }
  };
  




  function findDetails(groups) {
    const [membersInfo, setMembersInfo] = useState([]);
  
    useEffect(() => {
      async function fetchMembersInfo() {
        const memberUids = groups.flatMap((group) => group.members);
        const members = await Promise.all(memberUids.map(async (uid) => {
          const user = await firebase.auth().getUser(uid);
          return {
            uid,
            email: user.email,
          };
        }));
        setMembersInfo(members);
      }
  
      fetchMembersInfo();
    }, [groups]);
  
    return (
      <div>
        {groups.map((group) => (
          <div key={group.id}>
            <h2>Group Details:</h2>
            <p>Starting Location: {group.starting_location}</p>
            <p>Destination: {group.to}</p>
            <p>Departure Time: {group.departure_timestamp}</p>
            <p>Members:</p>
            <ul>
              {group.members.map((memberId) => {
                const memberInfo = membersInfo.find((member) => member.uid === memberId);
  
                return (
                  <li key={memberId}>
                    {memberInfo && (
                      <div>
                        <p>Email: {memberInfo.email}</p>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>
    );
  }
  

function GroupsOverview({ userId }) {
    const [groups, setGroups] = useState([]);
  
    useEffect(() => {
      async function fetchUserGroups() {
        const userGroups = await getUserGroups(userId);
        setGroups(userGroups);
      }
  
      fetchUserGroups();
    }, [userId]);
  
    return <div>{findDetails(groups)}</div>;
}
  
export default GroupsOverview