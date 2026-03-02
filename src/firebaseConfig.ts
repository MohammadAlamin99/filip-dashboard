import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore'; 

const firebaseConfig = {
  apiKey: "AIzaSyAOU31cja8NesTSbzSpjPFfR7u0WspyP0Q",
  authDomain: "goldshift-c2376.firebaseapp.com",
  projectId: "goldshift-c2376",
  storageBucket: "goldshift-c2376.firebasestorage.app",
  messagingSenderId: "842815751322",
  appId: "1:842815751322:web:240d7775582620f6898b23"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app); 
const firestore = getFirestore(app); 

export { auth, firestore };