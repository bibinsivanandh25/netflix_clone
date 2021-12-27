import firebase from "firebase";

//? Authentication
import "firebase/auth";

//? realtime database
import "firebase/database";

//? storage
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCykKRq7bodEeS5gwjdFzLh5J9an_QKZWo",
  authDomain: "netflix-clone-2c7d6.firebaseapp.com",
  projectId: "netflix-clone-2c7d6",
  storageBucket: "netflix-clone-2c7d6.appspot.com",
  messagingSenderId: "547795761963",
  appId: "1:547795761963:web:610a98d9e679bb5f93e36e",
};
firebase.initializeApp(firebaseConfig);
export default firebase;
