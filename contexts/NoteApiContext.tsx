import React, { createContext } from 'react'
import { Condition, Note } from '../interfaces'
import useNoteRepo from '../hooks/useNoteRepo'
import useConditionRepo from '../hooks/useConditionRepo'

interface INoteApiContext {
  notes: Note[],
  conditions: Condition[]
}

const initialState = {
  notes: [],
  conditions: []
}

export const NoteApiContext = createContext<INoteApiContext>(initialState);

export const NoteApiContextProvider = ({ children }: any) => {
  const { notes } = useNoteRepo();
  const { conditions } = useConditionRepo();

  return (
    <NoteApiContext.Provider value={{ notes, conditions }}>
      {children}
    </NoteApiContext.Provider>
  )
}