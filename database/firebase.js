import firebase from 'firebase';
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyBavpgQ9s3f8NeBEcXkVLVpxrB15_XIIcU",
   authDomain: "reactnativefirebase-e2fba.firebaseapp.com",
   projectId: "reactnativefirebase-e2fba",
   storageBucket: "reactnativefirebase-e2fba.appspot.com",
   messagingSenderId: "22092573756",
   appId: "1:22092573756:web:81724d2d6a6692b0f26739"
};
 // Initialize Firebase
 firebase.initializeApp(firebaseConfig);

 const db = firebase.firestore()

 export default {
     firebase, db,
 }