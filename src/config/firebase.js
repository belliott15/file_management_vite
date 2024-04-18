import firebase from "firebase/compat/app";
import "firebase/compat/auth";

// const apiKey = process.env.FIREBASE_API_KEY;
// const appId = process.env.FIREBASE_APP_ID;

const firebaseConfig = {
  apiKey: "AIzaSyCxQ1UeE1SUwgvi3dEWPNqOBoNFtRAnD48",
  authDomain: "file-management-2001d.firebaseapp.com",
  projectId: "file-management-2001d",
  storageBucket: "file-management-2001d.appspot.com",
  messagingSenderId: "261194848353",
  appId: "1:261194848353:web:3c23f5ea29595e3ee83220",
  measurementId: "G-ZPQV7R391M",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
