import  {useContext} from "react"
import { BrowserRouter,
        Routes,
        Route} from 'react-router-dom'
import { Menu } from './components/Menu'
import {Login} from './components/Login'
import { Navbar } from './components/Navbar'
import { NotFound } from './components/NotFound'
import { ProtectedComponent } from './components/ProtectedComponent'
import {AppContext} from './context/AppContext'


function AppRouter() {
  
  const {conectado}= useContext(AppContext);
  console.log(conectado)
  const {rol} = conectado;
  console.log(rol)
 
  ano
  pais
  signo
        

  return (
    <>
      
      <BrowserRouter>
      <ProtectedComponent user={ rol !== 0 }>
              <Navbar/>
      </ProtectedComponent>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/menu' element={<Menu />}  />
          <Route path='*' element={<NotFound />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
