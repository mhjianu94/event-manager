import './styles.css';
import React from 'react';
import { useMyState } from '../../state/State';
import {createUser} from "../../api/api.js"

const UserForm = () => {
    const { State, updateState } = useMyState();

    const handleInputChange = (e) => {
        updateState('user', e.target.name, e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        createUser(State.user)
        console.log('Submit User Data:', State.user);
    };

    return (
        <div className="user-form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className= "fromLabel" htmlFor="exampleInputEmail1">Email address</label>
                    <input 
                        type="email" 
                        className="form-control" 
                        id="exampleInputEmail1" 
                        name="email"
                        value={State.user.email}
                        onChange={handleInputChange}
                        placeholder="Enter email"
                    />
                    <small className="form-text text-muted">Add a valid email address</small>
                </div>
                <div className="form-group">
                    <label className= "fromLabel" htmlFor="exampleInputName1">Name</label>
                    <input 
                        type="text" 
                        className="form-control" 
                        id="exampleInputName1" 
                        name="name"
                        value={State.user.name}
                        onChange={handleInputChange}
                        placeholder="Name"
                    />
                    <small className="form-text text-muted">Add your first and last name</small>
                </div>
                <button 
                    className="btn btn-primary submitButton" 
                    type="submit">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UserForm;