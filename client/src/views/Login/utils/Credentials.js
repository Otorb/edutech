// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import {getStorage} from 'firebase/storage'
import "firebase/auth";
import "firebase/firestore";
// import { uid }  from 'uid'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyBi1JlCMfhk7hLCxoUQEQYjX44YheNv5AE",
  authDomain: "holads.firebaseapp.com",
  projectId: "holads",
  storageBucket: "holads.appspot.com",
  messagingSenderId: "111699694477",
  appId: "1:111699694477:web:409aeacd405b4932b863c4",
  measurementId: "G-G1N0F3YZ0K",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getDatabase(app);
export const auth = getAuth(app);

export const storage = getStorage(app)
// export async function uploadFile (file){
//     const storageRef = ref(storage , uid()) 
//     await uploadBytes(storageRef , file)
//     const url = await getDownloadURL(storageRef)
//     return url
//  }