import { useState, useEffect } from 'react';
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

    useEffect(() => {
        if (localStorage.getItem('username') !== null) {
            setUsuarioConectado(prevState => ({
              ...prevState,
              username: JSON.parse(localStorage.getItem('username')),
              fullname: JSON.parse(localStorage.getItem('fullname')),
              rol: JSON.parse(localStorage.getItem('rol'))
            }));
            
            console.log("RESTAURANDO USUARIO");
          }
    }, [])

  
      

    return (
        <AppContext.Provider value={{usuarioConectado, prueba, setUsuarioConectado}}>
            {props.children}
        </ AppContext.Provider>
    );
}