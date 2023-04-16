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
    let userId = currentUser.id

    const {data, error} = await supabase.from("Groups").select()

    const userGroups = data.filter((group) => {
      const members = group.members || [];
      return members.includes(userId);
    });

    if (error) {
      console.warn(error);
    } else {
      setUserGroups(userGroups)
    }
  }

  const getMemberInfo = async () => {
    // const memberUids = userGroups.flatMap((group) => group.members);
    // const members = await Promise.all(memberUids.map(async (uid) => {
    //   const user = await supabase.auth().getUser(uid);
    //   return {
    //     uid,
    //     email: user.email,
    //   };
    // }));

    const memberUIDs = userGroups.flatMap((group) => group.members)
    const members = await Promise.all(memberUIDs.map(async (uid) => {
      const user = await supabase.auth.getUser(uid);
      return {
        uid,
        email: user.email,
      };
    }));

    console.log(members)
  }

  useEffect(() => {
    if (currentUser.length == 0) {
      getUser()
    }
  }, [])

  useEffect(() => {
    getUserGroups()
  }, [currentUser])

  useEffect(() => {
    getMemberInfo()
  }, [userGroups])

  return (
    <div>
      {userGroups.map((group) => (
        <div key={group.id}>
          <h2>Group Details:</h2>
          <p>Starting Location: {group.from}</p>
          <p>Destination: {group.to}</p>
          <p>Departure Time: {new Date(group.departure_timestamp).toDateString()}</p>
          {/* <p>Members:</p>
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
          </ul> */}
        </div>
      ))}
    </div>
  )
}
  
export default GroupsOverview