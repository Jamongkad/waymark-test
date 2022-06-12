import type { NextApiRequest, NextApiResponse } from 'next'
import { DocumentData } from "firebase/firestore";
import NoteService from './NoteService'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const {
    query: { id },
    method,
  } = req

  const noteService = new NoteService();

  switch (method) {
    case 'GET':
      try {
        const snapshot = await noteService.getNoteById(id as string);  
        res.status(200).json({ id, data: snapshot.data() })
      } catch (e) {
        console.error(e);
        res.status(500).json({ name: e });
      }
      break
    case 'PUT':
      // Update or create data in your database
      res.status(200).json({ id, name: name || `User ${id}` })
      break
    default:
      res.setHeader('Allow', ['GET', 'PUT'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}