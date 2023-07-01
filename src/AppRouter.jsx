
import { BrowserRouter,
        Routes,
        Route} from 'react-router-dom'
import { Menu } from './components/Menu'
import {Login} from './components/Login'


function AppRouter() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/menu' element={<Menu />}  />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default AppRouter
