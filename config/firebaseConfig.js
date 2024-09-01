// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC-BRg46LG2m7wapsJHz6Zon9wlp0-v8_c",
  authDomain: "car-market-place-9486d.firebaseapp.com",
  projectId: "car-market-place-9486d",
  storageBucket: "car-market-place-9486d.appspot.com",
  messagingSenderId: "538792059953",
  appId: "1:538792059953:web:1440bdf44e5326a2dbe110",
  measurementId: "G-89NEM410CR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);