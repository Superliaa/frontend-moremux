import {useState, useMemo, useEffect} from 'react';
import { useFetch } from "../Hooks/useFetch";
import { DotLoader } from "react-spinners";
import { Toaster, toast } from 'sonner';
import {Tabla} from '../components/Tabla';
import { CrearComponentes } from './CrearComponentes';

export const Componentes = () => {

  const {data,loading,error} = useFetch("http://localhost:1337/api/componentes")
  const componentes = data.map((componente) => componente.attributes)

  const [modalOpen, setModalOpen] = useState(false);
  const [nuevoElemento, setNuevoElemento] = useState([]);
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    if (data) {
      setTableData(componentes);
    }
  }, [data]);


  const handleChange = (e) =>{
      setNuevoElemento({... nuevoElemento,[e.target.name]: e.target.value})

  }

  const handleAdd =()=>{

    fetch("http://localhost:1337/api/componentes", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          data: nuevoElemento
      })
    })
    .then(res => {
      if (res.status === 200) {
        return res.json();
      } else {
        throw new Error('La petición no fue exitosa');
      }
    })
    .then(data => {
      const componente = { ... nuevoElemento, id: componentes.id + 1 }
      setTableData([...tableData, componente]);
    })
    .catch(error => {
      console.log(error);
    })
    .finally(() => {
      setModalOpen(false);
    });
  }

  const columns = useMemo(
    () => [
     
      {
        accessorKey: 'Descripcion',
        header: 'Descripcion',
        size: 140,
        
      },
      {
        accessorKey: 'Marca',
        header: 'Marca',
        size: 140,
       
      },
      {
        accessorKey: 'Codigo',
        header: 'Codigo',
        size: 80,
        
      },
    ],
   
  );
  
 
  

  return (
    <div className='p-4 m-3'>
    {
      
    componentes.length > 0 ? (
      <>
      < button
       className="px-5 py-3 text-white bg-indigo-600 rounded-lg duration-150 active:shadow-lg mb-4 font-medium"
       style={{ backgroundColor: '#240879', '&:hover': { backgroundColor: '#4D15F4' } }}
       onClick={() => setModalOpen(true)}
      >
         Crear Nuevo Componente
      </button>
      <Tabla columns={columns}  setTableData={setTableData} tableData={tableData}/> 

      {modalOpen && <CrearComponentes setModalOpen={setModalOpen} modalOpen={modalOpen} handleAdd={handleAdd} handleChange={handleChange}/>}

      </>
    ) : (
       loading &&  <div className="flex justify-center items-center h-screen"> <DotLoader color="#240879" />  </div>
       )
  }
   {error && <Toaster richColors>{toast.error('Servidor no conectado')}</Toaster>}
 </div>

 
  )
}
