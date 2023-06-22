import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

 const firebaseConfig = {
   apiKey: "AIzaSyD6hsdcEDm06RfJOCuDjR-cFWqUjW0wlTc",
   authDomain: "reactnativefirebase-4d39e.firebaseapp.com",
   projectId: "reactnativefirebase-4d39e",
   storageBucket: "reactnativefirebase-4d39e.appspot.com",
   messagingSenderId: "726741808302",
   appId: "1:726741808302:web:44ccf6eaedc60cbbd7a93f"
 };



const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export default db ;