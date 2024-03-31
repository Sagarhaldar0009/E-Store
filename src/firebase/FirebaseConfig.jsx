import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAuGWcbJOwaVkUTSSx94LhgePUpFilRj4o",
  authDomain: "myfirstapp-59382.firebaseapp.com",
  projectId: "myfirstapp-59382",
  storageBucket: "myfirstapp-59382.appspot.com",
  messagingSenderId: "81199573760",
  appId: "1:81199573760:web:8f0ebbd6f11494bbb9e1e5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}
