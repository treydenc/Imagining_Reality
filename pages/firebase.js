import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const apiKey = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;
const authDomain = process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN;
const projectId = process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID;
const storageBucket = process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET;
const messagingSenderId = process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID;
const appId = process.env.NEXT_PUBLIC_FIREBASE_APP_ID;
const measurementId = process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID;

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBWaEb-5-XOCiguHUuCKQFUAkOZwkjaNYQ",
    authDomain: "enactive-85199.firebaseapp.com",
    projectId: "enactive-85199",
    storageBucket: "enactive-85199.appspot.com",
    messagingSenderId: "182155392164",
    appId: "1:182155392164:web:17d68249936fd572b76231",
    measurementId: "G-RHS6QRTHHS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
export { storage };
