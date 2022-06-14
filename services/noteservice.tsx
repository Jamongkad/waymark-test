import axios from 'axios';
import { Condition, Note, NoteRequestData } from '../interfaces';

const apiPaths = {
  notes: () => `/api/notes`
}

class NoteService  {

  async getNotes() {
    const { data: { data } } = await axios.get(apiPaths.notes());

    const notes = data.map(({ id, data: { text, tags }} : { id: string, data: { text: string, tags: []} }) => {

      const conditions = tags.map(({ id, label }) => {
        const condition: Condition = { id, label }
        return condition;
      })

      const note: Note = { id, text, tags: conditions }
      return note;
    });

    return notes;
  }

  async createNote(note: NoteRequestData) {
    const res = await axios.post(apiPaths.notes(), note);
    return res;
  }
}

export default NoteService;