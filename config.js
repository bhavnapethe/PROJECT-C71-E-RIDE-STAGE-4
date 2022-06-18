import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBHEa5Jy0dEDuNr-r8nIgezwApzU7OUsY8",
    authDomain: "pro-c71-e-ride-stage-4-a95f8.firebaseapp.com",
    projectId: "pro-c71-e-ride-stage-4-a95f8",
    storageBucket: "pro-c71-e-ride-stage-4-a95f8.appspot.com",
    messagingSenderId: "289857990356",
    appId: "1:289857990356:web:ca843243ed2b1161f3d541"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
