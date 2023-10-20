import {useContext, useState} from "react"
import image from "../assets/logo.svg";
import {AppContext} from '../context/AppContext'
import { useFetch } from "../Hooks/useFetch";
import { Toaster, toast } from 'sonner';

export const Login = () => {

    const [usuario, setUsuario] = useState([]);
    const [incorrecto, setIncorrecto] = useState(false);
   

    const handleChange = (e) =>{
        setUsuario({... usuario,[e.target.name]: e.target.value})

    }

    const {usuarioConectado, setUsuarioConectado} = useContext(AppContext);

    const {data, error} = useFetch("http://localhost:1337/api/usuarios?populate=*")

    const handleLogin = e =>{
        e.preventDefault();

  
        const usuariosList = data.map((user) => user.attributes)
  

            console.log(usuariosList);

            const userEncontrado =usuariosList.find(u=> u.NombreUsuario === usuario.NombreUsuario && u.Contrasena === usuario.Contrasena)

            console.log(userEncontrado)
            

            if(userEncontrado !== undefined){
                localStorage.setItem('username', JSON.stringify(userEncontrado.NombreUsuario))
                localStorage.setItem('fullname',JSON.stringify(userEncontrado.Nombre + " " + userEncontrado.Apellido1 
                    ))
                localStorage.setItem('rol',JSON.stringify(userEncontrado.Rol))
                setUsuarioConectado( {
                    username: userEncontrado.NombreUsuario,
                    fullname: userEncontrado.Nombre + userEncontrado.Apellido1,
                    rol: userEncontrado.Rol,}) ;
               
            }else if (!error){
                setIncorrecto(true);

            }
            console.log(usuarioConectado);
            console.log(usuarioConectado.fullname);
            console.log(usuarioConectado.rol);
        }


     return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            {error && <Toaster richColors>{toast.error('Servidor no conectado')}</Toaster>}
            {incorrecto && <Toaster richColors>{toast.error('Usuario o contraseña incorrecto')}</Toaster>}

            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src={image} width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Taller More/Mux</h3>
                        <p className="">¿No tienes cuenta? <button className="font-medium text-blue-900 hover:text-blue-800">Regístrate</button></p>
                    </div>
                </div>
                <form className="mt-8 space-y-5">
                    <div>
                        <label className="font-medium ">
                            Nombre de Usuario
                        </label>
                        <input
                            type="text"
                            required
                            name='NombreUsuario'
                            onChange={handleChange}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Contraseña
                        </label>
                        <input
                            type="password"
                            required
                            name='Contrasena'
                            onChange={handleChange}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium rounded-lg duration-150 text-white"
                        onClick={handleLogin}
                        style={{backgroundColor: '#240879', ':hover': {backgroundColor: '#4D15F4'}}}
                    >

                        Entrar
                    </button>
                    <div className="text-center">
                        <button className="hover:text-blue-900">¿Olvidaste tu contraseña?</button>
                    </div>
                </form>
            </div>
         
        </main>
    )
}