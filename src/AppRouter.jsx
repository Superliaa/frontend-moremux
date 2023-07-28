import {useContext} from "react"
import {
    BrowserRouter,
    Routes,
    Route,
    Navigate,
} from 'react-router-dom'
import {Menu} from './components/Menu'
import {Login} from './components/Login'
import {Navbar} from './components/Navbar'
import {NotFound} from './components/NotFound'
import ProtectedComponent from "./components/ProtectedComponent.jsx";
import {AppContext} from './context/AppContext'
import ProtectedRoute from "./components/ProtectedRoute.jsx";
import { GestionarUsuarios } from "./components/GestionarUsuarios"
import { BaseDatos } from "./components/BaseDatos"
import { Trazas } from "./components/Trazas"
import { GestinarCentros } from "./components/GestinarCentros"
import { TiposEquipos } from "./components/TiposEquipos"
import { Componentes } from "./components/Componentes"
import { OrdenesTrabajo } from "./components/OrdenesTrabajo"
import { CerrarOrdenes } from "./components/CerrarOrdenes"
import { Notificaciones } from "./components/Notificaciones"


function AppRouter() {


    const {usuarioConectado} = useContext(AppContext);

    console.log("RENDER APP ROUTER")
    if (localStorage.getItem('username') !== null) {
        usuarioConectado.username = JSON.parse(localStorage.getItem('username'));
        usuarioConectado.fullname = JSON.parse(localStorage.getItem('fullname'));
        usuarioConectado.rol = JSON.parse(localStorage.getItem('rol'));
        console.log("RESTAURANDO USUARIO");
    }


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
                    </Route>

                    {/* ------------------------ Administrador ------------------------ */}

                    <Route path='/usuarios' element={<GestionarUsuarios/>}/>
                    <Route path='/backup' element={<BaseDatos/>}/>
                    <Route path='/trazas' element={<Trazas/>}/>

                    {/* ------------------------ Jefe de Taller y Comercial ------------------------ */}

                    <Route path='/centros' element={<GestinarCentros/>}/>
                    <Route path='/equipos' element={<TiposEquipos/>}/>
                    <Route path='/componentes' element={<Componentes/>}/>
                    <Route path='/ordenes' element={<OrdenesTrabajo/>}/>

                    {/* ------------------------ Tecnicos ------------------------ */}

                    <Route path='/cerrarordenes' element={<CerrarOrdenes/>}/>


                    {/* ------------------------ SIN PROTEGER ------------------------ */}
                    <Route path='*' element={<NotFound/>}/>
                    <Route path='/notificaciones' element={<Notificaciones/>}/>


                </Routes>
            </BrowserRouter>
        </>
    )
}

export default AppRouter
