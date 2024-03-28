import firebase from "firebase/compat/app";
// import "firebase/compat/firestore"

const apiKey = process.env.FIREBASE_API_KEY;
const appId = process.env.FIREBASE_APP_ID;

const firebaseConfig = {
  apiKey: apiKey,
  authDomain: "file-management-2001d.firebaseapp.com",
  projectId: "file-management-2001d",
  storageBucket: "file-management-2001d.appspot.com",
  messagingSenderId: "261194848353",
  appId: appId,
  measurementId: "G-ZPQV7R391M",
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;
