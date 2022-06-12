import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBOpyL4hdXjHZH3MhS2kS-IxB41NuTgOA8",
  authDomain: "waymark-test.firebaseapp.com",
  projectId: "waymark-test",
  storageBucket: "waymark-test.appspot.com",
  messagingSenderId: "825902020612",
  appId: "1:825902020612:web:2ce64fc4d6e0ff68b95d51"
};

const firebaseApp = initializeApp(firebaseConfig);
export const firebaseDB = getFirestore(firebaseApp);
