import {useState ,useEffect} from 'react'
import { DotLoader } from "react-spinners";
import {TablaCentros} from '../components/TablaCentros';


export const GestinarCentros = () => {

  const [centros, setCentros] = useState([]);
  const [loading , setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)
    
    fetch("http://localhost:1337/api/centros")
    .then((response)=> response.json())
    .then(data => {
      const centros = data.data;
      setCentros(centros.map((centro) => centro.attributes))

      setLoading(false);
      
      console.log(centros)})
}, []);

  return (
    <div className='p-4 m-3'>
      {centros.length > 0 ? (
        <TablaCentros centros={centros}/>
      ) : (
         loading &&  <div className="flex justify-center items-center h-screen"> <DotLoader color="#240879" />  </div>
      )}
   </div>
 
  )
}
