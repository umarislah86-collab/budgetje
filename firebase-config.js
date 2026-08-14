// ============================================================
// LANGKAH SETUP FIREBASE
// ============================================================
// 1. Pergi https://console.firebase.google.com
// 2. Create project baru
// 3. Add Web app → copy config values ke bawah
// 4. Dalam Firebase Console:
//    - Authentication → Sign-in method → Enable Google
//    - Firestore Database → Create database (production mode)
// 5. Set Firestore Security Rules:
//
//    rules_version = '2';
//    service cloud.firestore {
//      match /databases/{database}/documents {
//        match /users/{uid}/{doc=**} {
//          allow read, write: if request.auth.uid == uid;
//        }
//      }
//    }
// ============================================================

const firebaseConfig = {
  apiKey:            "AIzaSyCHujHMcJd9Uiw1CT9sEvdLBNGYUIkCtuQ",
  authDomain:        "bajetje-c86b2.firebaseapp.com",
  projectId:         "bajetje-c86b2",
  storageBucket:     "bajetje-c86b2.firebasestorage.app",
  messagingSenderId: "861235657321",
  appId:             "1:861235657321:web:0c4d8d089ad90f7f6700f8"
};

// Jangan ubah bawah ni
const FIREBASE_ENABLED =
  typeof firebase !== 'undefined' &&
  firebaseConfig.apiKey !== 'YOUR_API_KEY';

if (FIREBASE_ENABLED) {
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().enablePersistence({ synchronizeTabs: true }).catch(() => {});
}
