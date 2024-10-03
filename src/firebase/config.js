// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB91btjBUn1tgEbPl0v4US2HJkZeZMrB2w",
    authDomain: "hi-twitter-57ddf.firebaseapp.com",
    projectId: "hi-twitter-57ddf",
    storageBucket: "hi-twitter-57ddf.appspot.com",
    messagingSenderId: "838152807363",
    appId: "1:838152807363:web:25e0dfbfff2f79fb679376"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth hizmetinin referansını al
export const auth = getAuth(app);

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

// veritbanının referansını al
export const db = getFirestore(app);

// storage referansını al
export const storage = getStorage(app);