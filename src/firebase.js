// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuZzuYGMHl8xmjbzBHdic-xX9cRgzqSeg",
  authDomain: "appoint-eduhub.firebaseapp.com",
  projectId: "appoint-eduhub",
  storageBucket: "appoint-eduhub.appspot.com",
  messagingSenderId: "583211869528",
  appId: "1:583211869528:web:b9d29f6d338a75f88df12d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);