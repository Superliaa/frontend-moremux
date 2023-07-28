import React, {useContext, useEffect} from 'react'
import {AppContext} from '../context/AppContext'


export const Menu = () => {

    const {usuarioConectado} = useContext(AppContext);

    
    return (
    <div>
      
        <h1>entraste al sistema</h1>
    </div>
  )
}
