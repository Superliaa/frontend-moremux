import {useState, useEffect} from 'react'
import { DotLoader } from "react-spinners";
import {TablaComponentes} from '../components/TablaComponentes';

export const Componentes = () => {
  const [componentes, setComponentes] = useState([]);
  const [loading , setLoading] = useState(false)

  useEffect(() => {

    setLoading(true)
    
    fetch("http://localhost:1337/api/componentes")
    .then((response)=> response.json())
    .then(data => {
      const componentes = data.data;
      setComponentes(componentes.map((componente) => componente.attributes))

      setLoading(false);
      
      console.log(componentes)})
}, []);

  return (
    <div className='p-4 m-3'>
      {componentes.length > 0 ? (
        <TablaComponentes componentes={componentes}/>
      ) : (
         loading &&  <div className="flex justify-center items-center h-screen"> <DotLoader color="#240879" />  </div>
      )}
   </div>
 
  )
}
