import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaMvpGZLZ6JrwhFlpReGwuQzeq3jFFkN8",
  authDomain: "volley-store.firebaseapp.com",
  projectId: "volley-store",
  storageBucket: "volley-store.firebasestorage.app",
  messagingSenderId: "710029233825",
  appId: "1:710029233825:web:f672ec62ddd159a9e0aae0"
};


const app = initializeApp(firebaseConfig);


export const db = getFirestore(app);