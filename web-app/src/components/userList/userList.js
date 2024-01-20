import React, { useState, useEffect } from 'react';
import { getUsers } from '../../api/api.js'; 
import { useMyState } from  "../../state/State.js";

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [reloadUsers, setReloadUsers] = useState(false);
    const { State, updateState } = useMyState(); 

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error('Failed to fetch users:', error);
            } finally {
                setReloadUsers(false); // Resetați flag-ul indiferent de rezultat
            }
        };

            fetchUsers();
    }, [reloadUsers, State.userAdded]); 

    const handleUserSelect = (userId) => {

        updateState('selectedUserId', null, userId);
    };

    return (
        <div className="user-list-container container mt-3">
            <div className="list-container">
                <h2>Users</h2>
            </div>
            <ul className="list-group">
                {users.map(user => (
                    <li 
                        key={user.id} 
                        className={`list-group-item ${State.selectedUserId === user.id ? 'selected-user' : ''}`}
                        onClick={() => handleUserSelect(user.id)}
                        style={{ cursor: 'pointer' }}
                    >
                        Email: {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;
