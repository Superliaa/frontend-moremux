import {useContext, useState} from "react"
import {useNavigate} from 'react-router-dom'
import image from "../assets/logo.svg";
import {AppContext} from '../context/AppContext'
import {userList} from '../data/user'

export const Login = () => {

    const [usuario, setUsuario] = useState([])

    const handleChange = (e) =>{
        setUsuario({... usuario,[e.target.name]: e.target.value})

    }

    let navigate = useNavigate();

    const {usuarioConectado} = useContext(AppContext);




    const handleLogin = e =>{
        e.preventDefault();
        const userEncontrado = userList.find(u => u.username === usuario.username && u.password === usuario.password);

        console.log("USUARIO QUE ESTAMOS BUSCANDO:" + userEncontrado)


        if(userEncontrado !== undefined){
            localStorage.setItem('username', JSON.stringify(userEncontrado.username))
            localStorage.setItem('fullname',JSON.stringify(userEncontrado.fullname))
            localStorage.setItem('rol',JSON.stringify(userEncontrado.rol))
            usuarioConectado.username = userEncontrado.username;
            usuarioConectado.fullname = userEncontrado.fullname;
            usuarioConectado.rol = userEncontrado.rol;

            console.log(usuarioConectado.username);
            console.log(usuarioConectado.fullname);
            console.log(usuarioConectado.rol);
            // navigate('/menu');
            location.reload();
        }else{
            alert('incorrecto')
        }
    }


    return (
        <main className="w-full h-screen flex flex-col items-center justify-center px-4">
            <div className="max-w-sm w-full text-gray-600">
                <div className="text-center">
                    <img src={image} width={150} className="mx-auto" />
                    <div className="mt-5 space-y-2">
                        <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Taller More/Mux</h3>
                        <p className="">¿No tienes cuenta? <button className="font-medium text-blue-900 hover:text-blue-800">Regístrate</button></p>
                    </div>
                </div>
                <form
                    className="mt-8 space-y-5"
                    onSubmit={handleLogin}
                >
                    <div>
                        <label className="font-medium ">
                            Nombre de Usuario
                        </label>
                        <input
                            type="text"
                            required
                            name='username'
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
                            name='password'
                            onChange={handleChange}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-blue-900 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-blue-900 hover:bg-blue-800 active:bg-bg-blue-900 rounded-lg duration-150 text-white"
                        onClick={handleLogin}
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