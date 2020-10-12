import Firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// 1) when seeding the database you'll have to uncomment this!
// import { seedDatabase } from '../seed';

const firebaseConfig = {
  apiKey: "AIzaSyDJsUvideNS2sZ1RgD5xyFYguIG6k0QqPQ",
  authDomain: "netflix-clone-4ba74.firebaseapp.com",
  databaseURL: "https://netflix-clone-4ba74.firebaseio.com",
  projectId: "netflix-clone-4ba74",
  storageBucket: "netflix-clone-4ba74.appspot.com",
  messagingSenderId: "1073969708932",
  appId: "1:1073969708932:web:21dd266584bd42acc027d1",
  measurementId: "G-NPX8BDZXQG",
};

const firebase = Firebase.initializeApp(firebaseConfig);

// 2) when seeding the database you'll have to uncomment this!
// seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };
