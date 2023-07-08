
import { BrowserRouter,
        Routes,
        Route} from 'react-router-dom'
import { Menu } from './components/Menu'
import {Login} from './components/Login'
import { Navbar } from './components/Navbar'
import { NotFound } from './components/NotFound'
import {ProtectedRoute} from './components/ProtectedRoute'


function AppRouter() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Login />} />
          <Route path='/menu' element={<Menu />}  />
          <Route path='/inicio' element={
            <ProtectedRoute >
              <Navbar />
            </ProtectedRoute>
           } 
            />
          <Route path='*' element={<NotFound />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
