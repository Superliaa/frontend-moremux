import React, {useContext, useState} from "react"
import {useNavigate} from 'react-router-dom'
import image from "../assets/logo.svg";
import {AppContext} from '../context/AppContext'

export const Login = () => {

    const [users, setUsers] = useState([])

    const handleChange = (e) =>{
        setUsers({... users,[e.target.name]: e.target.value}) 
    
    }

    let navigate = useNavigate();
    
    const {user}= useContext(AppContext)

    const handleLogin = () =>{
        if(user.find(u => u.username === users.username && u.password === users.password )){
        localStorage.setItem('user',JSON.stringify(users))   
            navigate('/inicio');
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
                        <p className="">¿No tienes cuenta? <button className="font-medium text-indigo-600 hover:text-indigo-500">Regístrate</button></p>
                    </div>
                </div>
                <form
                    onSubmit={(e) => e.preventDefault()}
                    className="mt-8 space-y-5"
                >
                    <div>
                        <label className="font-medium ">
                            User
                        </label>
                        <input
                            type="text"
                            required
                            name='username'
                            onChange={handleChange}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <div>
                        <label className="font-medium">
                            Password
                        </label>
                        <input
                            type="password"
                            required
                            name='password'
                            onChange={handleChange}
                            className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                        />
                    </div>
                    <button
                        className="w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150"
                        onClick={handleLogin}
                    >
                        Entrar
                    </button>
                    <div className="text-center">
                        <button className="hover:text-indigo-600">¿Olvidaste tu contraseña?</button>
                    </div>
                </form>
            </div>
            
        </main>
    )
}