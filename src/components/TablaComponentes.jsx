import React, { useCallback, useMemo, useState} from 'react';
import {useNavigate } from 'react-router-dom'
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
import { CrearComponentes } from '../pages/CrearComponentes';



export const TablaComponentes = ({componentes}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [tableData, setTableData] = useState(componentes);
  const [validationErrors, setValidationErrors] = useState({});

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
            rowsPerPageOptions:[10, 50, 100, 200],}}
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
            Crear nuevo componente
          </Button>
        )}
        
      />

      {modalOpen && <CrearComponentes setModalOpen={setModalOpen} modalOpen={modalOpen} />}
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



