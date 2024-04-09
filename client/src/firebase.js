// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-f9d08.firebaseapp.com",
  projectId: "mern-blog-f9d08",
  storageBucket: "mern-blog-f9d08.appspot.com",
  messagingSenderId: "640335509380",
  appId: "1:640335509380:web:6c62d0c57dec62e7bf0fd1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
