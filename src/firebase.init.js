// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoPcFIPIjwFP-1k4aTF8tl1JRPSToFWNo",
  authDomain: "auto-fixer-bootstrap.firebaseapp.com",
  projectId: "auto-fixer-bootstrap",
  storageBucket: "auto-fixer-bootstrap.appspot.com",
  messagingSenderId: "141879873691",
  appId: "1:141879873691:web:db4cbf52bbd743698f363e",

    // apiKey:process.env.REACT_APP_apiKey,
    // authDomain:process.env.REACT_APP_authDomain,
    // projectId:process.env.REACT_APP_projectId,
    // storageBucket:process.env.REACT_APP_storageBucket,
    // messagingSenderId:process.env.REACT_APP_messagingSenderId,
    // appId:process.env.REACT_APP_appId
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
