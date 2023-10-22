import {useState, useMemo, useEffect, useCallback} from 'react';
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
  const [validationErrors, setValidationErrors] = useState({});
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

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
  
      try {
        const response = await fetch('http://localhost:1337/api/componentes', {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(values),
        });
  
        if (response.ok) {
          // Actualiza la tabla de datos localmente o vuelve a buscar los datos actualizados para re-renderizar
          setTableData([...tableData]);
          exitEditingMode(); // Requerido para salir del modo de edición y cerrar el modal
        } else {
          // Maneja cualquier error de respuesta de la API aquí
        }
      } catch (error) {
        // Maneja cualquier error de red u otros errores aquí
      }
    }
  };
  
  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };
  
  const handleDeleteRow = useCallback(
    async (row) => {
      if (
        !confirm(`Esta seguro que desea eliminar ${row.getValue('Descripcion')}`)
      ) {
        return;
      }
      try {
        const response = await fetch('http://localhost:1337/api/componentes', {
          method: 'DELETE',
        });
  
        if (response.ok) {
          // Elimina el elemento de la tabla de datos localmente
          tableData.splice(row.index, 1);
          setTableData([...tableData]);
        } else {
          // Maneja cualquier error de respuesta de la API aquí
        }
      } catch (error) {
        // Maneja cualquier error de red u otros errores aquí
      }
    },
    [tableData],
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
      <Tabla columns={columns}  setTableData={setTableData} tableData={tableData} handleSaveRowEdits={handleSaveRowEdits} handleDeleteRow={handleDeleteRow} handleCancelRowEdits={handleCancelRowEdits}/> 

      {modalOpen && <CrearComponentes setModalOpen={setModalOpen} modalOpen={modalOpen} handleAdd={handleAdd} handleChange={handleChange}/>}

      </>
    ) : (
       loading &&  <div className="flex justify-center items-center h-screen"> <DotLoader color="#240879" />  </div>
       )
  }
   {error && <Toaster richColors position="top-right">{toast.error('Servidor no conectado')}</Toaster>}
 </div>

 
  )
}
