import { React, useState, useEffect } from 'react';
import { supabase } from '../../supabaseClient';

import './GroupSearch.css'

const GroupSearch = () => {
    const [startingLocation, setStartingLocation] = useState('');
    const [destination, setDestination] = useState('');
    const [departure, setDeparture] = useState('');
    const [startingTime, setStartingTime] = useState('');
    const [endingTime, setEndingTime] = useState('');
    const [dateTimeRange, setDateTimeRange] = useState([]);
    const [groups, setGroups] = useState([]);

    const currentDate = new Date().toJSON().slice(0, 10)

    useEffect(() => {
        setDateTimeRange(createDateTimeFromSelections())
    }, [departure, startingTime, endingTime])

    useEffect(() => {
        console.log(dateTimeRange)
    }, [dateTimeRange])

    useEffect(() => {
        console.log(groups)
    }, [groups])

    const createDateTimeFromSelections = () => {
        if (departure.length != 0 && startingTime.length != 0 && endingTime.length != 0) {
            let [year, month, day] = departure.split("-").map(time => parseInt(time))
            let [startingTimeHours, startingTimeMinutes] = startingTime.split(":").map(time => parseInt(time))
            let [endingTimeHours, endingTimeMinutes] = endingTime.split(":").map(time => parseInt(time))

            let startingDateTime = new Date(year, month - 1, day, startingTimeHours, startingTimeMinutes)
            let endingDateTime = new Date(year, month - 1, day, endingTimeHours, endingTimeMinutes)

            return [startingDateTime.toISOString(), endingDateTime.toISOString()]
        } else {
            return []
        }
    }

    // Search function
    const search = async () => {
        const { data, error } = await supabase
        .from('Groups')
        .select()
        .eq('archived', false)
        .eq('from', startingLocation)
        .eq('to', destination)
        .gte('departure_timestamp', dateTimeRange[0])
        .lte('departure_timestamp', dateTimeRange[1]);

        if (error) {
            console.warn(error);
        } else {
            setGroups(data);
        }
    };

    // Create group function
    const createGroup = async (startingLocation, destination, departureTime, size, userId) => {
        const maxMembers = size === 'normal' ? 3 : 5;

        const { data, error } = await supabase
        .from('Groups')
        .insert({
            from: startingLocation,
            to: destination,
            departure_timestamp: departureTime,
            members: JSON.stringify([userId]),
            max_members: maxMembers,
            created_by: userId,
        });

        if (error) {
            console.warn(error);
        } else {
            console.log('Group created successfully');
        }
    };

    // Add user function
    const addUserToGroup = async (userId, groupId) => {
        const { data, error } = await supabase
        .from('Groups')
        .update({
            members: supabase
            .sql('array_append(members, ?)', userId),
            archived: supabase
            .sql('array_length(members) >= max_members'),
        })
        .eq('id', groupId);

        if (error) {
            console.warn(error);
        } else {
            console.log('User added to group successfully');
        }
    };

    return (
        <div>
            <h1 class="text-2xl font-bold text-gray-800 sm:text-3xl dark:text-white"  style={{marginBottom:10}}>
                Group Search
            </h1>
            <form onSubmit={(e) => {
                e.preventDefault();
                search();
            }}>

                
                <label style={{padding:10}}>
                    <span style={{ color: 'white' }}>Starting Location:</span>
                    <select value={startingLocation} onChange={(e) => setStartingLocation(e.target.value)} required>
                        <option value="">Select starting location</option>
                        <option value="Evanston">Evanston</option>
                        <option value="O'Hare">O'Hare</option>
                        <option value="Midway">Midway</option>
                    </select>
                </label>
                <br />
                <label style={{padding:10}}>
                    <span style={{ color: 'white' }}>Destination:</span>
                    <select value={destination} onChange={(e) => setDestination(e.target.value)} required>
                        <option value="">Select destination</option>
                        <option value="Evanston">Evanston</option>
                        <option value="O'Hare">O'Hare</option>
                        <option value="Midway">Midway</option>
                    </select>
                </label>
                <br /> 
                <label style={{padding:10}}>
                    <span style={{ color: 'white' }}>Departure:</span>
                    <input type="date" value={departure} onChange={(e) => setDeparture(e.target.value)} min={currentDate} required/>
                </label>
                <br/>
                <label style={{padding:10}}>
                    <span style={{ color: 'white' }}>Starting Time:</span>
                    <input type="time" value={startingTime} onChange={(e) => setStartingTime(e.target.value)} required/>
                </label>
                <br />
                <label style={{padding:10}}>
                    <span style={{ color: 'white' }}>Ending Time:</span>
                    <input type="time" value={endingTime} onChange={(e) => setEndingTime(e.target.value)} required/>
                </label>
                <br/>
                <button type="submit" style={{padding:10}}>Search</button>
            </form>
            {groups.length > 0 ? (
                <div>
                    <h2>Results:</h2>
                    {groups.map((group) => (
                        <div key={group.id}>
                            <p>Starting Location: {group.from}</p>
                            <p>Destination: {group.to}</p>
                            <p>Departure Time: {group.departure_timestamp}</p>
                            <p>Members: {group.members.length}</p>
                            <p>Max Members: {group.max_members}</p>
                            <button onClick={() => addUserToGroup(userId, group.id)}>Join Group</button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>No available groups</p>
            )}
        </div>
    );
}

export default GroupSearch