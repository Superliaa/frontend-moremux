import React, { useCallback, useMemo, useState, useEffect } from 'react';
import { MaterialReactTable } from 'material-react-table';
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  MenuItem,
  Stack,
  TextField,
  Tooltip,
} from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import { MRT_Localization_ES } from 'material-react-table/locales/es';
import { CrearCentros } from '../pages/crearCentros';



export const TablaCentros = ({centros}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [tableData, setTableData] = useState(centros);
  const [validationErrors, setValidationErrors] = useState({});
  const [centro, setCentro] = useState([])
    
    const handleChange = (e) =>{
        setCentro({... centro,[e.target.name]: e.target.value})

    }


 const handleAdd =()=>{

  fetch("http://localhost:1337/api/centros", {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json'
      },
      body: JSON.stringify({
          data: centro
      })
  })
  .then (res => res.json())
  .then (data => {
    setTableData( data );
    console.log(tableData)
  })
  .catch (error =>{
      console.log(error)
  })
  setModalOpen(false)
}

console.log(tableData)


  const handleCreateNewRow = (values) => {
    tableData.push(values);
    setTableData([...tableData]);
  };

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };
  

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (
        !confirm(`Esta seguro que desea eliminar ${row.getValue('Nombre')}`)
      ) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render
      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData],
  );

 

  const columns = useMemo(
    () => [
      
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
    ],
 
  );

  return (
    <>
      <MaterialReactTable
        displayColumnDefOptions={{
          'mrt-row-actions': {
            muiTableHeadCellProps: {
              align: 'center',
            },
            size: 120,
          },
        }}
        columns={columns}
        data={tableData}
        positionActionsColumn="last"
        muiTablePaginationProps={{
            rowsPerPageOptions:[10, 50 ,100, 200],}}
            localization={MRT_Localization_ES}

        editingMode="modal" //default
        enableColumnOrdering
        enableEditing
        onEditingRowSave={handleSaveRowEdits}
        onEditingRowCancel={handleCancelRowEdits}
        renderRowActions={({ row, table }) => (
          <Box sx={{ display: 'flex', gap: '1rem' }}>
            <Tooltip arrow placement="left" title="Edit">
              <IconButton onClick={() => table.setEditingRow(row)}>
                <Edit />
              </IconButton>
            </Tooltip>
            <Tooltip arrow placement="right" title="Delete">
              <IconButton color="error" onClick={() => handleDeleteRow(row)}>
                <Delete />
              </IconButton>
            </Tooltip>
          </Box>
        )}
        renderTopToolbarCustomActions={() => (
          <Button
            color="secondary"
            onClick={()=> setModalOpen(true)}
            variant="contained"
          >
            Crear nuevo centro
          </Button>
        )
      }
     
      />
    {modalOpen && <CrearCentros setModalOpen={setModalOpen} modalOpen={modalOpen} handleAdd={handleAdd} handleChange={handleChange} centro={centro} />}
    </>
  );
};

//example of creating a mui dialog modal for creating new rows
export const CreateNewAccountModal = ({ open, columns, onClose, onSubmit }) => {
  const [values, setValues] = useState(() =>
    columns.reduce((acc, column) => {
      acc[column.accessorKey ?? ''] = '';
      return acc;
    }, {}),
  );

  const handleSubmit = () => {
    //put your validation logic here
    onSubmit(values);
    onClose();
  };

 
};



