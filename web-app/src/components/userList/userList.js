import "./styles.css"
import React, { useState, useEffect } from 'react';
import { getUsers } from '../../api/api.js'; 

const UserList = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const fetchedUsers = await getUsers();
                setUsers(fetchedUsers);
            } catch (error) {
                console.error('Failed to fetch users:', error);
                // Handle the error appropriately
            }
        };

        fetchUsers();
    }, []);
    return (
        <div className="user-list-container container mt-3">
            <div className="list-container">
                <h2>Users</h2>
            </div>
            <ul className="list-group">
                {users.map(user => (
                    <li key={user.id} className="list-group-item">
                        Email: {user.email}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default UserList;