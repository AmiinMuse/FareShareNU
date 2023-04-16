import { React, useState, useEffect } from "react";

import './GroupsOverview.css'
import { supabase } from "../../supabaseClient";

const GroupsOverview = () => {
  const [userGroups, setUserGroups] = useState([]);
  const [membersInfo, setMembersInfo] = useState([]);
  const [currentUser, setCurrentUser] = useState([]);

  const getUser = async () => {
    const { data, error } = await supabase.auth.getSession()

    if (error) {
      console.warn(error)
    } else {
      setCurrentUser(data.session.user)
    }
  }

  const getUserGroups = async () => {
    try {
      let userId = currentUser.id

      const { data, error } = await supabase
        .from("Groups")
        .select("*")
        
  
      if (error) {
        throw error;
      }
  
      const userGroups = data.filter((group) => {
        const members = JSON.parse(group.members) || [];
        return members.includes(userId);
      });
  
      return userGroups;
    } catch (error) {
      console.warn(error);
    }
  }

  const getMemberInfo = async () => {
    const memberUids = userGroups.flatMap((group) => group.members);
    const members = await Promise.all(memberUids.map(async (uid) => {
      const user = await supabase.auth().getUser(uid);
      return {
        uid,
        email: user.email,
      };
    }));
  }

  useEffect(() => {
    if (currentUser.length == 0) {
      getUser()
    }
  }, [])

  useEffect(() => {
    console.log(getUserGroups())
  }, [currentUser]);

  useEffect(() => {
    setMembersInfo(getMemberInfo());
  }, [userGroups]);

  return (
    <div>
      {userGroups.map((group) => (
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
  )
}
  
export default GroupsOverview