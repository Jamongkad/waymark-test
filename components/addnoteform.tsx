import React, { createContext } from 'react';
import { Box, Container, Grid, Link, Paper, Stack } from '@mui/material';
import Button from '@mui/material/Button';

const AddNoteForm = () => {
  return (
    <>
      <Stack spacing={2} direction="column">
        <Button variant="contained">Add Patient Note</Button>
      </Stack>
    </>
  )
}

export default AddNoteForm;