import { useState } from 'react';
import {createContext} from 'react'


export const AppContext = createContext();

export const ContextProvider = ({children})=>{
    const [conectado, setConectado] =useState([])
    return (
        <AppContext.Provider value={{conectado, setConectado}}>
            {children}

        </AppContext.Provider>
    );
}; 