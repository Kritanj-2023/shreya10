// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from '@firebase/firestore'
import { getStorage } from "firebase/storage";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAjXFOH3SvxD077r9TgzAXpogxaAtOwJxs",
  authDomain: "nitlink-b8183.firebaseapp.com",
  projectId: "nitlink-b8183",
  storageBucket: "nitlink-b8183.appspot.com",
  messagingSenderId: "1090466236276",
  appId: "1:1090466236276:web:3c0aa867e1720a5c758e21",
  measurementId: "G-V77S1JNZBM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
