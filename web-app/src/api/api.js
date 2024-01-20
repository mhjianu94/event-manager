import axios from 'axios';

const API_URL = 'https://localhost:8080';

export const createUser = async (userData) => {
    console.log("userData ", userData)
    try {
        const response = await axios.post(`${API_URL}/user/add`, userData, {
            headers: {
                'Content-Type': 'application/json'
            }
        } );
        return response.data;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export const createEvent = async (eventData) => {
    console.log("userData ", eventData)
    try {
        const response = await axios.post(`${API_URL}/event/add`, eventData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error creating event:', error);
        throw error;
    }
};

export const getEvents = async (eventData) => {
    console.log("EventData ", eventData)
    try {
        const response = await axios.get(`${API_URL}/events`, {
            headers: {
                'Content-Type': 'application/json'
            }
        });
        console.log("sponse.data: ",response.data)
        return response.data;
    } catch (error) {
        console.error('Error getting  events:', error);
        throw error;
    }
};

export const getUsers = async (userData) => {
    console.log("userData ", userData)
    try {
        const response = await axios.get(`${API_URL}/users`, {
            headers: {
                'Content-Type': 'application/json'
            }
        } );
        return response.data;
    } catch (error) {
        console.error('Error getting users:', error);
        throw error;
    }
};