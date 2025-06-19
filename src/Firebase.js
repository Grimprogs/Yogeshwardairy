// Firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIbLLATdxObzemRJfu8Cs57QU6pPg3rMo",
  authDomain: "yogeshwar-79e5a.firebaseapp.com",
  projectId: "yogeshwar-79e5a",
  storageBucket: "yogeshwar-79e5a.appspot.com",
  messagingSenderId: "YOUR_SENDER_ID",
  appId: "YOUR_APP_ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db  = getFirestore(app);

export { auth, db };
