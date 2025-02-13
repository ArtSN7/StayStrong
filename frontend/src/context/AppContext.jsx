import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [messageText, setMessageText] = useState("");
    const [messageUsername, setMessageUsername] = useState("");

    return (
        <AppContext.Provider value={{ messageText, setMessageText, messageUsername, setMessageUsername}}>
            {children}
        </AppContext.Provider>
    );
};