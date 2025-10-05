// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBw12BzG9fThp0ZywkqNT2jcQJPt3Z9le4",
  authDomain: "prepwise-30a5e.firebaseapp.com",
  projectId: "prepwise-30a5e",
  storageBucket: "prepwise-30a5e.firebasestorage.app",
  messagingSenderId: "453204146253",
  appId: "1:453204146253:web:a274f585be17825abc4404",
  measurementId: "G-PK23RWSBKG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);