import { useState } from 'react';
import {createContext} from 'react'


export const AppContext = createContext();

export function ContextProvider(props){
    console.log("Entró al Context Provider")

    const [usuarioConectado , setUsuarioConectado] = useState({
        username: '',
        fullname: '',
        rol: 0,
    }) ;

    const prueba = {
        test: 1,
        test2: 2
    };

    return (
        <AppContext.Provider value={{usuarioConectado, prueba, setUsuarioConectado}}>
            {props.children}
        </ AppContext.Provider>
    );
}