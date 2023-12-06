// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxjcF8lerge6f1_gRjuiOu8T7oWOdhdyM",
  authDomain: "fb-crud-react-1e0a1.firebaseapp.com",
  projectId: "fb-crud-react-1e0a1",
  storageBucket: "fb-crud-react-1e0a1.appspot.com",
  messagingSenderId: "406995434269",
  appId: "1:406995434269:web:9c07ec63bb06750bf73ff4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
