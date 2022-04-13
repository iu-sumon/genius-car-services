// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDM4OiiCDY3wJsv29VbWwS9ZXf58VXOQFQ",
    authDomain: "genius-car-services-667e2.firebaseapp.com",
    projectId: "genius-car-services-667e2",
    storageBucket: "genius-car-services-667e2.appspot.com",
    messagingSenderId: "694715157961",
    appId: "1:694715157961:web:25d65600733a74a69eec18"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;