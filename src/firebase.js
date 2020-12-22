import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDz2d7xbwBXSymbEsAG13Vke4lC74ZMR18",
  authDomain: "xchange-bc83d.firebaseapp.com",
  databaseURL: "https://xchange-bc83d-default-rtdb.firebaseio.com",
  projectId: "xchange-bc83d",
  storageBucket: "xchange-bc83d.appspot.com",
  messagingSenderId: "1032102118976",
  appId: "1:1032102118976:web:92299c07d5fe0b7b6141a5",
  measurementId: "G-WW21HQ887R"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;