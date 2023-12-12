import firebase from 'firebase/app';
//storage kullanılacaksa => import 'firebase/storage';
import 'firebase/database';
import 'firebase/auth';


const firebaseConfig = {
    apiKey: "AIzaSyBPHi4gbZ68crR0zpaWrKN5VZoFTXXAjtg",
    authDomain: "react-blog-app-e07fb.firebaseapp.com",
    projectId: "react-blog-app-e07fb",
    storageBucket: "react-blog-app-e07fb.appspot.com",
    messagingSenderId: "194982543475",
    appId: "1:194982543475:web:3ce1dbecd3634cf79eea06"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//firebase referans alma
const database = firebase.database();
//authentication
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();




export { database as default, googleAuthProvider, firebase };






