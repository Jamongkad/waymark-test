import { Grid } from '@mui/material';
import AddNoteForm from '../components/addnoteform';
import ResponsiveAppBar from '../components/appbar';
import NoteGrid from '../components/notegrid';

const App = () => {
  return (
    <Grid 
      container
      spacing={2}
    >
      <Grid item xs={6} md={12}>
        <ResponsiveAppBar />
      </Grid>
      <Grid item xs={6} md={3}>
        <AddNoteForm />
      </Grid>
      <Grid item xs={6} md={9}>
        <NoteGrid />
      </Grid>
    </Grid>
  )
}

export default App
