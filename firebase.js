import { initializeApp, getApps } from 'firebase/app'
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
} from 'firebase/auth'
import {
  getFirestore,
  collection,
  addDoc,
  setDoc,
  getDoc,
  getDocs,
  doc,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  collectionGroup,
  arrayUnion,
  arrayRemove,
  updateDoc,
} from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAXPHCNCbqZW2cvOCeu1uDs0rhLi8Nnb_4",
    authDomain: "final-message-6ae4a.firebaseapp.com",
    projectId: "final-message-6ae4a",
    storageBucket: "final-message-6ae4a.appspot.com",
    messagingSenderId: "607748365190",
    appId: "1:607748365190:web:1437c9d8df71ad7922aa07",
    measurementId: "G-BDF5YTTFXQ",
}

if (!getApps().length) initializeApp(firebaseConfig)

export {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  signOut,
  collection,
  collectionGroup,
  addDoc,
  getFirestore,
  onSnapshot,
  serverTimestamp,
  query,
  orderBy,
  getDoc,
  getDocs,
  setDoc,
  doc,
  arrayUnion,
  arrayRemove,
  updateDoc,
}