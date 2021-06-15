// import firebase from "firebase";

// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyCmcwJtQsZaUvcOchiltknfhF8i_Zqqc0w",
//     authDomain: "linkedin--clone-15326.firebaseapp.com",
//     projectId: "linkedin--clone-15326",
//     storageBucket: "linkedin--clone-15326.appspot.com",
//     messagingSenderId: "1073614556325",
//     appId: "1:1073614556325:web:83eb858f8e9844db5e514c",
//     measurementId: "G-GF8PTCGVZS"
//   };


// const firebaseApp= firebase.initializeApp(firebaseConfig);
// const db= firebaseApp.firestore();
// const auth= firebase.auth();

// export { db ,auth }; 





import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCmcwJtQsZaUvcOchiltknfhF8i_Zqqc0w",
    authDomain: "linkedin--clone-15326.firebaseapp.com",
    projectId: "linkedin--clone-15326",
    storageBucket: "linkedin--clone-15326.appspot.com",
    messagingSenderId: "1073614556325",
    appId: "1:1073614556325:web:83eb858f8e9844db5e514c",
    measurementId: "G-GF8PTCGVZS"
  };



const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebase.firestore();
const auth = firebase.auth();



export { db, auth}



























