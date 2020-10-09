import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB7kgAuSrNN9cl749drSCG87iKJyFNCVH8",
  authDomain: "discord-clone-674fd.firebaseapp.com",
  databaseURL: "https://discord-clone-674fd.firebaseio.com",
  projectId: "discord-clone-674fd",
  storageBucket: "discord-clone-674fd.appspot.com",
  messagingSenderId: "897962319628",
  appId: "1:897962319628:web:991999698785ad74c7f329",
  measurementId: "G-PB90QBMTF3",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
