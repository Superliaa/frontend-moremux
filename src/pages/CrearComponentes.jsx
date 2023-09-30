import {useState} from 'react'


export const CrearComponentes = ({modalOpen , setModalOpen}) => {

    const [componente, setComponente] = useState([])
   
    const handleChange = (e) =>{
        setComponente({... componente,[e.target.name]: e.target.value})

    }

    const handleAdd =()=>{

        fetch("http://localhost:1337/api/componentes", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                data: componente
            })
        })
        .then (res => res.json())
        .then (data => {
            console.log(data);
        })
        .catch (error =>{
            console.log(error)
        })
        setModalOpen(false)
    }

    
    return (
            modalOpen ? (
                <div className="fixed inset-0 z-10 overflow-y-auto">
                    <div className="fixed inset-0 w-full h-full bg-black opacity-40" onClick={() => setModalOpen(false)}></div>
                    <div className="flex items-center min-h-screen px-4 py-8">
                        <div className="relative w-full max-w-lg mx-auto bg-white rounded-md shadow-lg">
                            <div className="flex items-center justify-between p-4 border-b">
                                <h4 className="text-lg font-medium text-gray-900">
                                    Crear Componente
                                </h4>
                                <button className="p-2 text-gray-400 rounded-md hover:bg-gray-100"
                                    onClick={() => setModalOpen(false)}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 mx-auto" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                            <div className="space-y-2 p-4 mt-3 text-[15.5px] leading-relaxed text-gray-500">
                            <div>
                    <label className="text-gray-700 dark:text-gray-600" >Descripcion</label>
                    <input name="Descripcion" type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" onChange={handleChange}/>
                </div>
    
                <div>
                    <label className="text-gray-700 dark:text-gray-600" >Marca</label>
                    <input name='Marca' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" onChange={handleChange}/>
                </div>
    
                <div>
                    <label className="text-gray-700 dark:text-gray-600" >Codigo</label>
                    <input name='Codigo' type="text" className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring" onChange={handleChange}/>
                </div>
    
                            </div>
                            <div className="flex items-center gap-3 p-4 mt-5 border-t">
                                <button className="px-6 py-2 text-white bg-indigo-600 rounded-md outline-none ring-offset-2 focus:ring-2"style={{backgroundColor: '#240879', ':hover': {backgroundColor: '#4D15F4'}}}
                                    onClick={handleAdd}
                                >
                                    Añadir
                                </button>
                                <button className="px-6 py-2 text-gray-800 border rounded-md outline-none ring-offset-2 ring-indigo-600 focus:ring-2"
                                    onClick={() => setModalOpen(false)}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : ''
        )
    }
    