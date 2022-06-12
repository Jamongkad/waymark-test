import type { NextApiRequest, NextApiResponse } from 'next'
import { DocumentData } from "firebase/firestore";
import NoteService from './NoteService';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
   const {
    body: { text, tags },
    method,
  } = req 


  const noteService = new NoteService();

  switch(method)   {
    case 'GET':
      try {

        let data: DocumentData[] = [];

        const snapshot = await noteService.getAllNotes(); 
        snapshot.forEach((doc) => {
          data.push({ id: doc.id, data: doc.data()});
        });
        
        res.status(200).json({ data })
      } catch (e) {
        console.error(e);
        res.status(500).json({ name: e });
      }
      break;
    case 'POST':
      try {
        await noteService.createNote(text, tags);
        res.status(200).json({ name: "Note Created" });
      } catch (e) {
        console.error(e);
        res.status(500).json({ name: e });
      }
      break;
    default:
      res.setHeader('Allow', ['GET', 'POST'])
      res.status(405).end(`Method ${method} Not Allowed`)
  }
}
