import {useState} from 'react'


export const CrearCentros = () => {

    const [usuario, setUsuario] = useState([])
   

    const handleChange = (e) =>{
        setUsuario({... usuario,[e.target.name]: e.target.value})

    }

    
    return (
       
                <main className="w-full h-screen flex flex-col items-center justify-center ">
                    <div className="w-full space-y-6 text-gray-600 sm:max-w-md mt-0">
                        <div className="text-center ">
                           
                            <div className=" space-y-2">
                                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl ">Crear Centro</h3>
                                
                            </div>
                        </div>
                        <div className="bg-white shadow-2xl p-2 py-6 space-y-4 sm:p-6 sm:rounded-lg">
                        
                           
                            <form
                                onSubmit={(e) => e.preventDefault()}
                                className="space-y-5 "
                            >
                                <div>
                                    <label className="font-medium">
                                        Nombre del Centro
                                    </label>
                                    <input
                                        type="text"
                                        name='nombre'
                                        required
                                        onChange={handleChange}
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Provincia
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        name='provincia'
                                        onChange={handleChange}
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Direccion Territorial
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        name='direccion'
                                        onChange={handleChange}
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                                <div>
                                    <label className="font-medium">
                                        Municipio
                                    </label>
                                    <input
                                        type="text"
                                        required
                                        name='municipio'
                                        onChange={handleChange}
                                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                                    />
                                </div>
                                <button
                                    className="w-100 px-4 py-2 text-white font-medium rounded-lg duration-150  "   style={{backgroundColor: '#240879', ':hover': {backgroundColor: '#4D15F4'}}}
                                >
                                    Añadir
                                </button>
                            </form>
                        </div>
                        
                    </div>
                </main>
            )
        }
  