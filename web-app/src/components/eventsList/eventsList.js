// EventsList.js
import React, { useState, useEffect } from 'react';
import { getEvents } from '../../api/api.js'; 

const EventsList = ({ selectedUserId }) => {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const fetchEvents = async () => {
            try {
                const fetchedEvents = await getEvents();
                setEvents(fetchedEvents);
            } catch (error) {
                console.error('Failed to fetch events:', error);
            }
        };

        fetchEvents();
    }, []);

    return (
        <div className="event-list-container container mt-3">
            <div className="list-container">
                <h2>Events</h2>
            </div>
            <ul className="list-group">
                {events.filter(event => !selectedUserId || event.userId === selectedUserId)
                       .map(event => (
                    <li key={event.id} className="list-group-item">
                        Title: {event.title} - {event.description}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default EventsList;
