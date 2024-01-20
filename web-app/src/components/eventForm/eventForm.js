import './styles.css';
import React from 'react';
import {useMyState} from "../../state/State"

const EventForm = () => {
    const { State, updateState } = useMyState();

    const handleInputChange = (e) => {
        updateState('event', e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
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
                <button className="btn btn-primary submitButton" type="submit">Submit</button>
            </form>
        </div>
    );
};

export default EventForm;
