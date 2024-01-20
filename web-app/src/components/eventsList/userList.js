import "./styles.css"
import React, { useState, useEffect } from 'react';
import { getEvents } from '../../api/api.js'; 

const EventsList = () => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const events = await getEvents();
                setEvents(events);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            }
        };

        fetchEvents();
    }, []);
    return (
        <div className="user-list-container container mt-3">
            <div className="list-container">
                <h2>Users</h2>
            </div>
            <ul className="list-group">
                {events.map(event => (
                    <li key={event.id} className="list-group-item">
                        Events: {event.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventsList;