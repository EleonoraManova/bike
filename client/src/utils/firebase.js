import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBX5Ilc2zlMBeiGT5i3to-Oci9hbwfCkyU",
    authDomain: "bikes-6e08a.firebaseapp.com",
    databaseURL: "https://bikes-6e08a-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "bikes-6e08a",
    storageBucket: "bikes-6e08a.appspot.com",
    messagingSenderId: "564251661927",
    appId: "1:564251661927:web:58d23aa80308eeaacde6c2"
};


if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
};



export default firebase;

export const auth = firebase.auth();