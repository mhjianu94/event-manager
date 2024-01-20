import React, { useState, useEffect } from 'react';
import './styles.css';
import { useMyState } from "../../state/State";
import { createEvent, getUsers } from "../../api/api.js";

const EventForm = () => {
    const { State, updateState } = useMyState();
    const [users, setUsers] = useState([]);

    const handleInputChange = (e) => {
        updateState('event', e.target.name, e.target.value);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            } 
        };

        fetchUsers();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();
        createEvent(State.event)
        console.log('Submit Event Data:', State.event);
    };

    return (
        <div className="user-form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="formLabel" htmlFor="eventTitle">Title</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="eventTitle"
                        name="title"
                        value={State.event.title}
                        onChange={handleInputChange}
                        placeholder="Enter title"
                    />
                    <small className="form-text text-muted">Add a valid title for your event</small>
                </div>
                <div className="form-group">
                    <label className="formLabel" htmlFor="eventDescription">Description</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="eventDescription"
                        name="description"
                        value={State.event.description}
                        onChange={handleInputChange}
                        placeholder="Description"
                    />
                    <small className="form-text text-muted">Add your description for the event</small>
                </div>
                <div className="form-group">
                    <label className="formLabel" htmlFor="eventDate">Event Date</label>
                    <input 
                        type="date" 
                        className="form-control" 
                        id="eventDate"
                        name="eventDate"
                        value={State.event.eventDate}
                        onChange={handleInputChange}
                    />
                    <small className="form-text text-muted">Pick an event date</small>
                </div>
                <div className="form-group">
                <label className="formLabel" htmlFor="eventUser">Event Date</label>
                        <select 
                            className="form-control" 
                            id="eventUser"
                            name="userId"
                            value={State.event.userId}
                            onChange={handleInputChange}
                        >
                            <option value="">Select a User</option>
                            {users.map(user => (
                                <option key={user.id} value={user.id}>
                                    {user.name}
                                </option>
                            ))}
                        </select>
                        <small className="form-text text-muted">Pick an event date</small>
                    </div>
                <button className="btn btn-primary submitButton" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EventForm;
