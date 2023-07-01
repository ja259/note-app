import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAXOJD-SmZVNl-Lh3xKbn1f39CZfFVgT-Y",
  authDomain: "note-app-f5b40.firebaseapp.com",
  projectId: "note-app-f5b40",
  storageBucket: "note-app-f5b40.appspot.com",
  messagingSenderId: "918555639509",
  appId: "1:918555639509:web:a382e47a5adaac5e9a6c5c",
  measurementId: "G-TKX5L9L6NH",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();