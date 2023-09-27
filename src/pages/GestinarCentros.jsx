import { DotLoader } from "react-spinners";
import {TablaCentros} from '../components/TablaCentros';
import { useFetch } from '../Hooks/useFetch';


export const GestinarCentros = () => {


  const {data,loading} = useFetch("http://localhost:1337/api/centros")
  
  const centros = data.map((centro) => centro.attributes)
  

  return (
    <div className='p-4 m-3'>
      {
        
      centros.length > 0 ? (
         
        <TablaCentros centros={centros}/>
      ) : (
         loading &&  <div className="flex justify-center items-center h-screen"> <DotLoader color="#240879" />  </div>
      )}
   </div>
 
  )
}
