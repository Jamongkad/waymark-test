import { initializeApp } from 'firebase/app';
import { getDocs, getDoc, query, setDoc, collection, addDoc, doc, where, documentId } from "firebase/firestore";
import { firebaseDB } from '../config';
import { ConditionObject, Note, noteConverter } from './Note';

export default class NoteService {
 
  collection: string = "notes";

  async createNote(text: String, tags: [ConditionObject]) {
    try {
      const ref = doc(collection(firebaseDB, this.collection)).withConverter(noteConverter);
      await setDoc(ref, new Note(text, tags));
      console.log("Document written"); 
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  }

  async getNoteById(id: string) {
    try {
      const docRef = doc(firebaseDB, this.collection, id)
      // const q = query(collection(firebaseDB, this.collection), where(documentId(), '==', id))
      const querySnapshot = await getDoc(docRef);
      return querySnapshot;
    } catch (e) {
      console.error("Error getting document: ", e);
      throw e;
    }
  }

  async getAllNotes() {
    try {
      const ref = collection(firebaseDB, this.collection);
      const snapshot = await getDocs(ref); 
      return snapshot;
    } catch (e) {
      console.error("Error getting documents: ", e);
      throw e;
    }
  }
}