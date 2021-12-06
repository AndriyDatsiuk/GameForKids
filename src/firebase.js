import { initializeApp } from "firebase/app";

import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyCxFPopQofP0-nl7MvCQKSO5t8_pNbytgw",
    authDomain: "elevated-glow-296211.firebaseapp.com",
    databaseURL: "https://elevated-glow-296211-default-rtdb.firebaseio.com",
    projectId: "elevated-glow-296211",
    storageBucket: "elevated-glow-296211.appspot.com",
    messagingSenderId: "269690475120",
    appId: "1:269690475120:web:2d8a5d447dbe5653265ab5"
  };
  const app = initializeApp(firebaseConfig);

  

  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
    
      const user = userCredential.user;
     
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });

 