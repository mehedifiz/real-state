// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCH6QZcB6LbMXT6mfNPxQHtthpyiGkLFqo",
  authDomain: "urban-nest-b407c.firebaseapp.com",
  projectId: "urban-nest-b407c",
  storageBucket: "urban-nest-b407c.appspot.com",
  messagingSenderId: "916577618994",
  appId: "1:916577618994:web:97d68c90fa7b0273b6c02b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth ;