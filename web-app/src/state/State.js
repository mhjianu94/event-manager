import React, { createContext, useState, useEffect, useContext } from 'react';

const MyStateContext = createContext();

export const useMyState = () => useContext(MyStateContext);

export const MyStateProvider = ({ children }) => {
    const [State, setState] = useState({
        user: {
            name: '',
            email: '',
        },
        event: {
            title: '',
            description: '',
            eventDate: '',
        },
        selectedUserId: null, 
        userAdded: false,
        eventAdded:false
    });

    useEffect(() => {
        console.log('Global State updated:', State);
    }, [State]);

    const updateState = (section, key, value) => {

        if (section === 'selectedUserId') {
            setState(prevState => ({
                ...prevState,
                selectedUserId: value
            }));
        } else {
            setState(prevState => ({
                ...prevState,
                [section]: {
                    ...prevState[section],
                    [key]: value
                }
            }));
        }
    };
    
    return (
        <MyStateContext.Provider value={{ State, updateState }}>
            {children}
        </MyStateContext.Provider>
    );
};
