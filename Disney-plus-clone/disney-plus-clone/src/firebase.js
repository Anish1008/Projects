import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';

const firebaseConfig = {
        apiKey: "AIzaSyDr01NsCvfXc3KTT2QTxOw-7itPweckj8g",
        authDomain: "disneyplus-clone-fb8b5.firebaseapp.com",
        projectId: "disneyplus-clone-fb8b5",
        storageBucket: "disneyplus-clone-fb8b5.appspot.com",
        messagingSenderId: "242524128278",
        appId: "1:242524128278:web:ed3aef738f2f8c6273a137"
    };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
