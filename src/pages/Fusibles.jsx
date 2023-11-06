export const Fusibles = () => {



    return (
      <>
  <section className="h-screen">
      <form className="container max-w-2xl mx-auto shadow-lg md:w-3/4">
          <div className="p-4 rounded-lg bg-blue-400/5 ">
              
                  <div className="max-w-screen-xl mx-auto px-4 md:px-8">
                     <h1 className='font-semibold text-gray-700'>Fusibles</h1>
                     <p className="text-gray-600 mt-2">Introduzca los datos para buscar el fusible</p>
                  </div>
              
          </div>
          <div className="space-y-4 bg-white ">
               
                  <div className="items-center w-full p-4 space-y-4 text-gray-600 md:inline-flex md:space-y-0 ">
                      <h4 className="max-w-sm mx-auto md:w-1/3">
                          Información
                      </h4>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      <div className="relative">
                      <select className="rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-400  shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm">
                                       <option disabled selected >Tipo</option>
                                       <option >1</option>
                                       <option>2</option>
                                       <option></option>
                                       <option></option>
                                     </select>
                                 
              </div>
              <div className="relative">
                <input
                  type='number'
                  className="peer bg-transparent placeholder-transparent rounded-lg  flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm " placeholder=" Tensión Nominal" />
                <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs" >
                Tensión Nominal
                </span>
              </div>
  
              <div className="relative">
                <input
                  type='number'
                  className="peer bg-transparent placeholder-transparent rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm" placeholder="Corriente Nominal  "/>
                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs" >
                  Corriente Nominal 
                </span>
              </div>
              <div className="relative">
                <input
                  type='number'
                  className="peer bg-transparent placeholder-transparent rounded-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm" placeholder="Longitud"/>
                  <span className="pointer-events-none absolute start-2.5 top-0 -translate-y-1/2 bg-white p-0.5 text-xs text-gray-400 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-xs" >
                  Longitud 
                </span>
              </div>
            </div>     
                     </div>
                     <hr/>
                              <div className="w-full px-4 pb-4 ml-auto text-gray-500 md:w-1/3">
                                  <button type="submit" className="py-2 px-4 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg "
                                  style={{ backgroundColor: '#240879', '&:hover': { backgroundColor: '#4D15F4' } }}>
                                      Buscar
                                  </button>
                              </div>
                  </div>
           </form>
          </section>
  
      </>
    )
  }