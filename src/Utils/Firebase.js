// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqAoTv5DsMiQ3jDZBN3kfQstX4_wziOvI",
  authDomain: "ecommerce-30c73.firebaseapp.com",
  projectId: "ecommerce-30c73",
  storageBucket: "ecommerce-30c73.appspot.com",
  messagingSenderId: "558292152553",
  appId: "1:558292152553:web:23c559460f4d8f04868078"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//base de datos
export const db = getFirestore(app)

