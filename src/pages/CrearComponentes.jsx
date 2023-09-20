import {useState} from 'react'


export const CrearComponentes = () => {

    const [usuario, setUsuario] = useState([])
   

    const handleChange = (e) =>{
        setUsuario({... usuario,[e.target.name]: e.target.value})

    }

    
    return (
       
        <section class="max-w-2xl p-6 m-auto bg-white rounded-md shadow-2xl dark:bg-gray-800">
        <h2 class="text-lg font-semibold text-gray-700 capitalize dark:text-white">Crear Componente</h2>
    
        <form>
            <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                <div>
                    <label class="text-gray-700 dark:text-gray-200" >Descripcion</label>
                    <input name="descripcion" type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
    
                <div>
                    <label class="text-gray-700 dark:text-gray-200" >Marca</label>
                    <input name='marca' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
    
                <div>
                    <label class="text-gray-700 dark:text-gray-200" >Codigo</label>
                    <input name='codigo' type="text" class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40 dark:focus:border-blue-300 focus:outline-none focus:ring"/>
                </div>
    
            </div>
    
            <div class="flex justify-firt mt-6">
                <button class="px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform rounded-md "  style={{backgroundColor: '#240879', ':hover': {backgroundColor: '#4D15F4'}}}>Añadir</button>
            </div>
        </form>
    </section>
            )
        }
  