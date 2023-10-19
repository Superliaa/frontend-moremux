import {useMemo, useState, useEffect} from 'react'
import { DotLoader } from "react-spinners";
import {Tabla} from '../components/Tabla';
import { useFetch } from '../Hooks/useFetch';
import { CrearCentros } from './crearCentros';


export const GestinarCentros = () => {


  const {data,loading} = useFetch("http://localhost:1337/api/centros");
  const centros = data.map((centro) => centro.attributes);
  
  const [modalOpen, setModalOpen] = useState(false);
  const [nuevoElemento, setNuevoElemento] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [columns, setColumns] = useState([
    {
      accessorKey: 'Nombre',
      header: 'Nombre del Centro',
      size: 140,
      
    },
    {
      accessorKey: 'Provincia',
      header: 'Provincia',
      size: 140,
      
    },
    {
      accessorKey: 'DireccionTerritorial',
      header: 'Division Territorial',
     
    },
    {
      accessorKey: 'Municipio',
      header: 'Municipio',
      size: 80,
     
    },
  ]);


  console.log(tableData)
  
  useEffect(() => {
    if (data) {
      setTableData(centros);
    }
  }, [data]);

 
 

  const handleChange = (e) =>{
    setNuevoElemento({... nuevoElemento,[e.target.name]: e.target.value})

}

const handleAdd =()=>{

  fetch("http://localhost:1337/api/centros", {
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
    const centro = { ... nuevoElemento, id: centros.id + 1 }
    setTableData([...tableData, centro]);
  })
  .catch(error => {
    console.log(error);
  })
  .finally(() => {
    setModalOpen(false);
  });
}

 

  return (
    <div className='p-4 m-3'>
      {
        
      centros.length > 0 ? (
        <>
        < button
         className="px-5 py-3 text-white bg-indigo-600 rounded-lg duration-150 active:shadow-lg mb-4 font-medium"
         style={{ backgroundColor: '#240879', '&:hover': { backgroundColor: '#4D15F4' } }}
         onClick={() => setModalOpen(true)}
        >
           Crear Nuevo Centro
        </button>
        <Tabla columns={columns}  setTableData={setTableData} tableData={tableData}/> 

        {modalOpen && <CrearCentros setModalOpen={setModalOpen} modalOpen={modalOpen} handleAdd={handleAdd} handleChange={handleChange}/>}

        </>
      ) : (
         loading &&  <div className="flex justify-center items-center h-screen"> <DotLoader color="#240879" />  </div>
         )
    }
   </div>
 
  )

}
