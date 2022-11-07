// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {connectFirestoreEmulator, getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAszY1GlKmGsv8dX9x9TCQx-AyO974UqEI',
  authDomain: 'trombongos-tour-795ee.firebaseapp.com',
  projectId: 'trombongos-tour-795ee',
  storageBucket: 'trombongos-tour-795ee.appspot.com',
  messagingSenderId: '372835039601',
  appId: '1:372835039601:web:e0f0e3521ad44cd81f1ed0',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const db = getFirestore(app)
connectFirestoreEmulator(db, 'localhost', 8080);
export { db }
