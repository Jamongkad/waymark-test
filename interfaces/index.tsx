import React, { Dispatch, SetStateAction } from 'react'

export interface Note {
  id: string
  text: string
  tags: Condition[]
}

export interface Condition {
  id: string
  label: string
}

export interface NoteRequestData {
  text: string
  tags: Condition[]
}

export interface INoteApiContext {
  notes: Note[],
  setRetryNoteRepo: Dispatch<SetStateAction<Boolean>>
  retryNoteRepo: Boolean
}

export interface IConditionApiContext {
  conditions: Condition[]
}