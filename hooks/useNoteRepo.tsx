import { useEffect, useState } from 'react'
import { Condition, Note } from '../interfaces';
import axios from 'axios'
import NoteService from '../services/noteservice';

const apiPaths = {
  getNotes: () => `/api/notes`
}

const useNoteRepo = (retry: Boolean) => {

  const [notes, setNotes] = useState<Note[]>([])

  useEffect(() => {
    const asyncOperation = async () => {
      try {
        const noteService = new NoteService()
        const notes = await noteService.getNotes();
        setNotes(notes)
      } catch (e) {
        throw e;
      }
    }

    asyncOperation();
  }, [retry])

  return {
    notes
  }
}

export default useNoteRepo;