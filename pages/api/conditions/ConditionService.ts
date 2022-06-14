import { getDocs,setDoc, addDoc, doc, collection } from "firebase/firestore";
import { firebaseDB } from '../config';
import { Condition, conditionConverter } from './Condition';

export default class ConditionService {

  collection: string = "conditions";

  async createCondition(label: String) {
    try {
      const ref = doc(collection(firebaseDB, this.collection)).withConverter(conditionConverter);
      await setDoc(ref, new Condition(label)); 
      console.log("Document written"); 
    } catch (e) {
      console.error("Error adding document: ", e);
      throw e;
    }
  }

  async getAllConditions() {
    try {
      const ref = collection(firebaseDB, this.collection);
      const snapshot = await getDocs(ref); 
      return snapshot;
    } catch (e) {
      console.error("Error adding documents: ", e);
      throw e;
    }
  }
}