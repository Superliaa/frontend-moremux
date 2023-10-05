import { useFetch } from "../Hooks/useFetch";
import { DotLoader } from "react-spinners";
import {TablaComponentes} from '../components/TablaComponentes';

export const Componentes = () => {

  const {data,loading} = useFetch("http://localhost:1337/api/componentes")

  
  const componentes = data.map((componente) => componente.attributes)
 
  

  return (
    <div className='p-4 m-3'>
      {componentes.length > 0 ? (
        <TablaComponentes componentes={componentes} />
      ) : (
         loading &&  <div className="flex justify-center items-center h-screen"> <DotLoader color="#240879" />  </div>
      )}
   </div>
 
  )
}
