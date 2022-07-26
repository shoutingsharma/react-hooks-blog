import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyDfheOGW9Pbo_D51RvFsmwkUl0uOdprpNs",
    authDomain: "react-hooks-blog-e5f5c.firebaseapp.com",
    projectId: "react-hooks-blog-e5f5c",
    storageBucket: "react-hooks-blog-e5f5c.appspot.com",
    messagingSenderId: "440479893127",
    appId: "1:440479893127:web:3bf3d516f46aa574a55a22"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export const firestore=firebase.firestore();