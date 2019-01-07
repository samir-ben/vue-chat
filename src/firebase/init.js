import firebase from 'firebase/app';
import 'firebase/firestore';

// Initialize Firebase
var config = {
    apiKey: "AIzaSyAnGp6n9NzIC2opHwGw75KaD3s4jf7QHpg",
    authDomain: "chat-vue-edc36.firebaseapp.com",
    databaseURL: "https://chat-vue-edc36.firebaseio.com",
    projectId: "chat-vue-edc36",
    storageBucket: "chat-vue-edc36.appspot.com",
    messagingSenderId: "368739096571"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });

export default firebaseApp.firestore();



