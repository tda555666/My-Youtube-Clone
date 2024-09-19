import { initializeApp } from "firebase/app";
import { getStorage} from 'firebase/storage';
import {getFirestore} from "firebase/firestore"

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyB9NomQPgAoQ6B1c64XhN3ahqN0U1Fe3YU",
//   authDomain: "mern-df125.firebaseapp.com",
//   projectId: "mern-df125",
//   storageBucket: "mern-df125.appspot.com",
//   messagingSenderId: "757150184874",
//   appId: "1:757150184874:web:16b30a921277ea328527d3"
// };
const firebaseConfig = {
  apiKey: "AIzaSyDlqPDjVKkf1-3jJ9s3gU6nC0vOJEKKV9o",
  authDomain: "yt-monkey.firebaseapp.com",
  projectId: "yt-monkey",
  storageBucket: "yt-monkey.appspot.com",
  messagingSenderId: "331940857611",
  appId: "1:331940857611:web:67ffa87b4fdceeee8ac40e"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const db = getFirestore(app)