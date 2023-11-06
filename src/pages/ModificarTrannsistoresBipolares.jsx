

import React from 'react'

export const ModificarTransistoresBipolares = () => {
  return (
   
  <section className="container  mx-auto border border-gray-300 rounded-lg shadow-sm  w-10/11">
        <div className=" max-w-screen-xl mx-auto px-4 md:px-8" > 
                 <h1 className="text-gray-800 text-xl font-bold sm:text-2xl mt-8">
                        Modificar Transistores Bipolares
                    </h1>
                    <h4 className="text-gray-600 mt-2">
                        Introduce la información para crear modficar el transistor ID
                    </h4>
         </div>

         <hr className='mt-2 mb-3'/>          
    
        <div className="space-y-3 bg-white">
        <div className="items-center md:w-4/5 p-3 space-y-3 text-gray-600 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">
                        Encapsulado
                    </h2>
                    <div className="max-w-sm mx-auto space-y-3 md:w-2/3">
                        <div>
                            <div className=" relative ">
                            <select className="rounded-lg  flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                                     <option disabled selected className='text-gray-400 placeholder-gray-400'>...</option>
                                     <option></option>
                                     <option></option>
                                     <option></option>
                                     <option></option>
                                   </select>
                                </div>
                            </div>
                           
                            </div>
                        </div>
                <hr/>
                <div className="items-center md:w-4/5 p-3 space-y-3 text-gray-600 md:inline-flex md:space-y-0">
                    <h2 className="max-w-sm mx-auto md:w-1/3">
                        Polaridad
                    </h2>
                    <div className="max-w-sm mx-auto space-y-3 md:w-2/3">
                        <div>
                            <div className=" relative ">
                            <select className="rounded-lg  flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent">
                                     <option disabled selected className='text-gray-400 placeholder-gray-400'>...</option>
                                     <option></option>
                                     <option></option>
                                     <option></option>
                                     <option></option>
                                   </select>
                                </div>
                            </div>
                           
                            </div>
                        </div>
                        <hr/>
                        <div className="items-center md:w-4/5 p-3 space-y-3 text-gray-600 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">
                    Disipación de Potencia
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                        <input type="number"  className=" rounded-lg flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Disispación"/>
                        </div>
                    </div>
                </div>
                    <hr/>
                            <div className="items-center md:w-4/5 p-3 space-y-3 text-gray-600 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">
                Tensión Base Colector
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                        <input type="number"  className=" rounded-lg flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Tensión Base Colector"/>
                        </div>
                    </div>
                </div>
              <hr/>
              <div className="items-center md:w-4/5 p-3 space-y-3 text-gray-600 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">
                Tensión Base Emisor
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                        <input type="number"  className=" rounded-lg flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Tensión Base Emisor"/>
                        </div>
                    </div>
                </div>
                <hr/>
                <div className="items-center md:w-4/5 p-3 space-y-3 text-gray-600 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">
                Tensión Colector Emisor
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                        <input type="number"  className=" rounded-lg flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Tensión Colector Emisor"/>
                        </div>
                    </div>
                </div>
                        <hr/>
                        <div className="items-center md:w-4/5 p-3 space-y-3 text-gray-600 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">
                Corriente Colector
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                        <input type="number"  className=" rounded-lg flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Corriente Colector"/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="items-center md:w-4/5 p-3 space-y-3 text-gray-600 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">
                Transición de Frecuencia
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                        <input type="number"  className=" rounded-lg flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Transición de Frecuencia"/>
                        </div>
                    </div>
                </div>
                <hr />
                <div className="items-center md:w-4/5 p-3 space-y-3 text-gray-600 md:inline-flex md:space-y-0">
                <h2 className="max-w-sm mx-auto md:w-1/3">
                Ganancia de Corriente Continua
                </h2>
                <div className="max-w-sm mx-auto md:w-2/3">
                    <div className=" relative ">
                        <input type="number"  className=" rounded-lg flex-1 appearance-none border border-gray-400 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent" placeholder="Ganancia de Corriente Continua"/>
                        </div>
                    </div>
                </div>
                <hr />
                        <div className="items-center md:w-4/5 p-3 space-y-3 text-gray-600 md:inline-flex md:space-y-0">
                              <div className="max-w-sm mx-auto md:w-1/3">
                        
                              </div>
                    <div className="max-w-sm mx-auto space-y-3 md:w-2/3">
                        <div>
                            <div className=" relative ">
                            <button type="submit" className="py-2 px-4  bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                            style={{ backgroundColor: '#240879', '&:hover': { backgroundColor: '#4D15F4' } }}>
                                    Añadir
                                </button>
                                </div>
                            </div>
                           
                            </div>
                        </div>
                            
                        </div>
                    
                </section>

  )
}