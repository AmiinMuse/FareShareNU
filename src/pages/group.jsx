import { useState, useEffect } from 'react';
import { supabase } from './supabaseClient';

function GroupSearch() {
  const [startingLocation, setStartingLocation] = useState('');
  const [destination, setDestination] = useState('');
  const [startingTime, setStartingTime] = useState('');
  const [endingTime, setEndingTime] = useState('');
  const [groups, setGroups] = useState([]);

  // Search function
  const search = async () => {
    const { data, error } = await supabase
      .from('groups')
      .select('*')
      .eq('archived', false)
      .eq('from', startingLocation)
      .eq('to', destination)
      .gte('departure_timestamp', startingTime)
      .lte('departure_timestamp', endingTime);

    if (error) {
      console.log(error);
    } else {
      setGroups(data);
    }
  };

  // Create group function
  const createGroup = async (startingLocation, destination, departureTime, size, userId) => {
    const maxMembers = size === 'normal' ? 3 : 5;

    const { data, error } = await supabase
      .from('groups')
      .insert({
        from: startingLocation,
        to: destination,
        departure_timestamp: departureTime,
        members: [userId],
        max_members: maxMembers,
        created_by: userId,
      });

    if (error) {
      console.log(error);
    } else {
      console.log('Group created successfully');
    }
  };

  // Add user function
  const addUser = async (userId, groupId) => {
    const { data, error } = await supabase
      .from('groups')
      .update({
        members: supabase
          .sql('array_append(members, ?)', userId),
        archived: supabase
          .sql('array_length(members) >= max_members'),
      })
      .eq('id', groupId);

    if (error) {
      console.log(error);
    } else {
      console.log('User added to group successfully');
    }
  };

    return (
        <div>
            <h1>Group Search</h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                search();
            }}>
                <label>
                    Starting Location:
                    <select value={startingLocation} onChange={(e) => setStartingLocation(e.target.value)}>
                        <option value="">Select starting location</option>
                        <option value="Evanston">Evanston</option>
                        <option value="O'Hare">O'Hare</option>
                        <option value="Midway airport">Midway airport</option>
                    </select>
                </label>
                <br />
                <label>
                    Destination:
                    <select value={destination} onChange={(e) => setDestination(e.target.value)}>
                        <option value="">Select destination</option>
                        <option value="Evanston">Evanston</option>
                        <option value="O'Hare">O'Hare</option>
                        <option value="Midway airport">Midway airport</option>
                    </select>
                </label>
                <br />
                <label>
                    Starting Time:
                    <input type="time" value={startingTime} onChange={(e) => setStartingTime(e.target.value)} />
                </label>
                <br />
                <label>
                    Ending Time:
                    <input type="time" value={endingTime} onChange={(e) => setEndingTime(e.target.value)} />
                </label>
                <br />
                <button type="submit">Search</button>
            </form>
            {groups.length > 0 ? (
                <div>
                    <h2>Results:</h2>
                    {groups.map((group) => (
                        <div key={group.id}>
                            <p>Starting Location: {group.starting_location}</p>
                            <p>Destination: {group.to}</p>
                            <p>Departure Time: {group.departure_timestamp}</p>
                            <p>Members: {group.members.length}</p>
                            <p>Max Members: {group.max_members}</p>
                            <button onClick={() => addUser(userId, group.id)}>Join Group</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No available groups</p>
            )}
        </div>
    );
}
                  
