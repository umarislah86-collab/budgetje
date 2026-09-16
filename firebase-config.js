import { initializeApp } from 'firebase/app';
import { initializeAuth, browserLocalPersistence } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache, persistentMultipleTabManager } from 'firebase/firestore';

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

// Explicit IndexedDB persistence for auth (same as default but no ambiguity)
export const auth = FIREBASE_ENABLED
  ? initializeAuth(app, { persistence: browserLocalPersistence })
  : null;

// v9+ Firestore persistence API (enableMultiTabIndexedDbPersistence was removed in v11)
export const db = FIREBASE_ENABLED
  ? initializeFirestore(app, {
      localCache: persistentLocalCache({ tabManager: persistentMultipleTabManager() })
    })
  : null;
