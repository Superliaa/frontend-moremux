import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './AppRouter.jsx'
import './index.css'
import {ContextProvider} from './context/AppContext'

ReactDOM.createRoot(document.getElementById('root')).render(
   <ContextProvider>
    <AppRouter />
  </ContextProvider>
  
)
