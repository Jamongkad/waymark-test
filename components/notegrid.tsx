import { DataGrid, GridRowsProp, GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import { Box, Container, Grid, Link, Paper, Stack } from '@mui/material';
import React, { useContext, useState } from 'react';
import { NoteApiContext } from '../contexts/NoteApiContext';

const columns: GridColDef[] = [
   {
    field: 'notes',
    headerName: 'Notes',
    width: 600,
    renderCell: (params: GridRenderCellParams) => <ExpandableCell {...params} />,
  },
  { field: 'tags', headerName: 'Tags', width: 150 },
];

const NoteGrid = () => {

  const { notes, conditions } = useContext(NoteApiContext);

  const rows: GridRowsProp = notes.map((note) => {
    return {
      id: note.id,
      notes: note.text,
      tags: note.tags.map((tag) => tag.name).join(", ")
    }
  })

  return (
    <Paper
      sx={{
        height: 400,
        width: '100%',
      }}
    >
      <DataGrid 
        getRowHeight={() => 'auto'}
        rows={rows} columns={columns} 
        pageSize={5}
        rowsPerPageOptions={[5]}
      />      
    </Paper>
  )
}

const ExpandableCell = ({ value }: GridRenderCellParams) => {
  const [expanded, setExpanded] = useState(false);
   
  return (
    <Box>
      {expanded ? value : value.slice(0, 200)}&nbsp;
      {value.length > 200 && (
        <Link
          type="button"
          component="button"
          sx={{ fontSize: 'inherit' }}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? 'view less' : 'view more'}
        </Link>
      )}
    </Box>
  );
};

export default NoteGrid;
