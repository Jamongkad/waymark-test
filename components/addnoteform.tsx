import React, { SyntheticEvent, useContext, useState } from 'react';
import { Grid, Stack } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import Autocomplete from '@mui/material/Autocomplete';
import { ConditionApiContext, NoteApiContext } from '../contexts/NoteApiContext';
import { Condition, NoteRequestData } from '../interfaces';
import NoteService from '../services/noteservice';

const AddNoteForm = () => {
  const [condition, setCondition] = useState<Condition[]>([]);
  const [note, setNote] = useState('');
  const [open, setOpen] = useState(false);
  const { setRetryNoteRepo, retryNoteRepo } = useContext(NoteApiContext);
  const { conditions } = useContext(ConditionApiContext);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const createNote = () => {
    const noteData: NoteRequestData = {
      text: note,
      tags: condition
    }

    const noteService = new NoteService();
    noteService.createNote(noteData);
    setRetryNoteRepo(!retryNoteRepo);
    setOpen(false);
  }

  return (
    <>
      <Stack spacing={2} direction="column">
        <Button variant="contained" onClick={handleClickOpen}>Add Patient Note</Button>
        <Dialog open={open} onClose={handleClose}>  
          <DialogContent>
            <Grid container spacing={3}> 
              <Grid item xs={12}> 
                <DialogContentText>
                  Create patient notes which medical practioners will use to provide the best care for their patients.
                </DialogContentText>
              </Grid>
              <Grid item xs={8}>
                <Autocomplete  
                  onChange={(event: SyntheticEvent, newValue: Condition) => { 
                    if(newValue) {
                      setCondition(current => [...current, newValue]);
                    }
                  }}   
                  options={conditions}
                  sx={{ width: 300 }}
                  renderInput={(params) => <TextField {...params} label="Conditions" />} 
                />
              </Grid>
              <Grid item xs={12}> 
                {condition.map(c => {
                  return (
                    <Button
                      onClick={() => {
                        const chosenId = c.id;
                        setCondition(condition.filter(c => c.id !== chosenId));
                      }}
                      endIcon={<ClearIcon />}
                    >
                      {c.label}
                    </Button>
                  )
                })}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  margin="dense"
                  multiline
                  rows="5"
                  variant="outlined"
                  label="Patient Notes"
                  id="additional-info"
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                    setNote(event.target.value);
                  }}
                />
              </Grid>
              <Grid 
               container
               direction="row"
               justifyContent="flex-end"
               alignItems="center"
               item 
               xs={12}
               >
                <Button onClick={handleClose}>Cancel</Button>
                <Button onClick={createNote}>Create</Button>                  
              </Grid>
            </Grid>
          </DialogContent>
        </Dialog>
      </Stack>
    </>
  )
}

export default AddNoteForm;