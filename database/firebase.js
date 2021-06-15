import firebase from 'firebase';
import 'firebase/firestore'

// Your web app's Firebase configuration (source code from your firebase project)

/*
var firebaseConfig = {
   apiKey: "---",
   authDomain: "---",
   projectId: "---",
   storageBucket: "---",
   messagingSenderId: "---",
   appId: "---"
};
*/

 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore()

 export default {
     firebase, db,
 }
