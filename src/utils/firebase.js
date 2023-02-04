import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCHsUJZd-R9i73By99ooOAUbAeGqlaYKSI",
  authDomain: "netflix-clone-e2d22.firebaseapp.com",
  projectId: "netflix-clone-e2d22",
  storageBucket: "netflix-clone-e2d22.appspot.com",
  messagingSenderId: "871348408418",
  appId: "1:871348408418:web:1ce45550c74ca8582d813b",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
