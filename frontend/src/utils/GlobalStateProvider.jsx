import React, { createContext, useContext, useState } from 'react';

// Create a context
const GlobalStateContext = createContext();

// Create a provider component
export const GlobalStateProvider = ({ children }) => {
    const [globalState, setGlobalState] = useState({});
    const [todoTableId, setTodoTableId] = useState(0);
    const [userId, setUserid] = useState(0);
    
    // Return the todoTableId setter function as part of the value
    return (
      <GlobalStateContext.Provider value={{ globalState, setGlobalState, setTodoTableId, setUserid, userId }}>
        {children}
      </GlobalStateContext.Provider>
    );
  };
  

// Custom hook to access the global state and setter function
export const useGlobalState = () => useContext(GlobalStateContext);
