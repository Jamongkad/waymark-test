import { useEffect, useState } from 'react'
import { Condition, Note } from '../interfaces';
import axios from 'axios'

const apiPaths = {
  getNotes: () => `/api/notes`
}

const useNoteRepo = () => {
  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    const asyncOperation = async () => {
      try {
        const { data: { data } } = await axios.get(apiPaths.getNotes());

        const notes = data.map(({ id, data: { text, tags }} : { id: string, data: { text: string, tags: []} }) => {

          const conditions = tags.map(({ id, name }) => {
            const condition: Condition = { id, name }
            return condition;
          })

          const note: Note = { id, text, tags: conditions }
          return note;
        });

        setNotes(notes)
      } catch (e) {
        throw e;
      }
    }

    asyncOperation();
  }, [])

  return {
    notes
  }
}

export default useNoteRepo;