import {useContext} from "react"
import {
    BrowserRouter,
    Routes,
    Route,
} from 'react-router-dom'
import {Menu} from './pages/Menu'
import {Login} from './pages/Login'
import {Navbar} from './components/Navbar'
import {NotFound} from './pages/NotFound'
import ProtectedComponent from "./components/ProtectedComponent.jsx";
import {AppContext} from './context/AppContext'
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { GestionarUsuarios } from "./pages/GestionarUsuarios"
import { BaseDatos } from "./pages/BaseDatos"
import { Trazas } from "./pages/Trazas"
import { GestinarCentros } from "./pages/GestinarCentros"
import { TiposEquipos } from "./pages/TiposEquipos"
import { Componentes } from "./pages/Componentes"
import { OrdenesTrabajo } from "./pages/OrdenesTrabajo"
import { CerrarOrdenes } from "./pages/CerrarOrdenes"
import { Notificaciones } from "./pages/Notificaciones"
import { CrearCentros } from "./pages/crearCentros"
import { CrearComponentes } from "./pages/CrearComponentes"



function AppRouter() {


    const {usuarioConectado} = useContext(AppContext);

    console.log("RENDER APP ROUTER")
  


    return (
        <>

            <BrowserRouter>
                <ProtectedComponent isAllowedIf={usuarioConectado.rol !== 0}>
                    <Navbar/>
                </ProtectedComponent>

                <Routes>
                    {/* ------------------------ Sin registrar ------------------------ */}

                    <Route
                        element={
                            <ProtectedRoute
                                isAllowed={usuarioConectado.rol === 0}
                                redirectToFailed={'/menu'}
                            />
                        }
                    >
                        <Route index element={<Login/>}/>
                    </Route>

                    {/* ------------------------ Usuario Registrado ------------------------ */}

                    <Route
                        element={
                            <ProtectedRoute
                                isAllowed={usuarioConectado.rol > 0}
                                redirectToFailed={'/'}
                            />
                        }
                    >
                        <Route path='/menu' element={<Menu/>}/>
                        <Route path='/notificaciones' element={<Notificaciones/>}/>
                    </Route>

                    {/* ------------------------ Administrador ------------------------ */}
                    <Route element={
                        <ProtectedRoute
                        isAllowed={usuarioConectado.rol === 1}
                        redirectToFailed={'/'}
                        />
                    }>
                    <Route path='/usuarios' element={<GestionarUsuarios/>}/>
                    <Route path='/backup' element={<BaseDatos/>}/>
                    <Route path='/trazas' element={<Trazas/>}/>
                    </Route>
                    

                    {/* ------------------------ Jefe de Taller y Comercial ------------------------ */}
                    <Route element={
                        <ProtectedRoute
                        isAllowed={usuarioConectado.rol === 2 || usuarioConectado.rol === 3}
                        redirectToFailed={'/'}
                        />
                    }>

                    <Route path='/centros' element={<GestinarCentros/>}/>
                    <Route path='/equipos' element={<TiposEquipos/>}/>
                    <Route path='/componentes' element={<Componentes/>}/>
                    <Route path='/ordenes' element={<OrdenesTrabajo/>}/>
                    </Route>

                    {/* ------------------------ Tecnicos ------------------------ */}
                    <Route element={
                        <ProtectedRoute
                        isAllowed={usuarioConectado.rol === 4}
                        redirectToFailed={'/'}
                        />
                    }>

                    <Route path='/cerrarordenes' element={<CerrarOrdenes/>}/>
                    </Route>


                    {/* ------------------------ SIN PROTEGER ------------------------ */}
                    <Route path='*' element={<NotFound/>}/>
                    


                </Routes>

                
            </BrowserRouter>
        </>
    )
}

export default AppRouter
