// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAIHlMs3wVcbQnYMRY6C5JeaSZL58Bcuhk",
  authDomain: "my-dictionary-3f8a3.firebaseapp.com",
  projectId: "my-dictionary-3f8a3",
  storageBucket: "my-dictionary-3f8a3.appspot.com",
  messagingSenderId: "665814083197",
  appId: "1:665814083197:web:dcc15f7ff3e71eeb307314",
  measurementId: "G-GEF71463R4"
};


initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const db = getFirestore();
// export {db};

export  const db = getFirestore();
