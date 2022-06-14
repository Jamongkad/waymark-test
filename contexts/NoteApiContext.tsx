import React, { createContext, useState } from 'react'
import { Condition, IConditionApiContext, INoteApiContext, Note } from '../interfaces'
import useNoteRepo from '../hooks/useNoteRepo'
import useConditionRepo from '../hooks/useConditionRepo'

const noteInitialState = {
  notes: [],
  setRetryNoteRepo: () => {},
  retryNoteRepo: true
}

const conditionInitialState = {
  conditions: [],
}

export const NoteApiContext = createContext<INoteApiContext>(noteInitialState);
export const ConditionApiContext = createContext<IConditionApiContext>(conditionInitialState);

export const ConditionApiContextProvider = ({ children }: any) => {
  const { conditions } = useConditionRepo();
  
  return (
    <ConditionApiContext.Provider value={{ conditions }}>
      {children}
    </ConditionApiContext.Provider>
  )
}

export const NoteApiContextProvider = ({ children }: any) => {

  const [retryNoteRepo, setRetryNoteRepo] = useState<Boolean>(true);

  const { notes } = useNoteRepo(retryNoteRepo);

  return (
    <NoteApiContext.Provider value={{ notes, setRetryNoteRepo, retryNoteRepo }}>
      {children}
    </NoteApiContext.Provider>
  )
}