import firebase from 'firebase'
import firestore from 'firebase/firestore'

// firebaseConfig is exchangeble depends on projects
// Your web app's Firebase configuration
// var firebaseConfig = {
//   apiKey: "AIzaSyDxJ2BEM5ydCoLvqZJd53BRssTC_m4occ8",
//   authDomain: "ninja-chat-136d0.firebaseapp.com",
//   databaseURL: "https://ninja-chat-136d0.firebaseio.com",
//   projectId: "ninja-chat-136d0",
//   storageBucket: "ninja-chat-136d0.appspot.com",
//   messagingSenderId: "766056987347",
//   appId: "1:766056987347:web:259da5c940a1cf9c907226"
// };

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

export default firebaseApp.firestore()
