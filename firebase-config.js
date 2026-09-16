import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey:            "AIzaSyCHujHMcJd9Uiw1CT9sEvdLBNGYUIkCtuQ",
  authDomain:        "bajetje-c86b2.firebaseapp.com",
  projectId:         "bajetje-c86b2",
  storageBucket:     "bajetje-c86b2.firebasestorage.app",
  messagingSenderId: "861235657321",
  appId:             "1:861235657321:web:0c4d8d089ad90f7f6700f8"
};

export const FIREBASE_ENABLED = firebaseConfig.apiKey !== 'YOUR_API_KEY';
const app = FIREBASE_ENABLED ? initializeApp(firebaseConfig) : null;
export const auth = FIREBASE_ENABLED ? getAuth(app) : null;
export const db   = FIREBASE_ENABLED ? getFirestore(app) : null;
