import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

export const BRANCH_DEPLOY = process.env.REACT_APP_BRANCH_DEPLOY;

let firebaseConfig;

if (BRANCH_DEPLOY === 'develop') {
const firebaseConfig = {
  apiKey: "AIzaSyBstMwpx0X5DhEdVgPkf6rjsx_7boiwHAk",
  authDomain: "tests-573a8.firebaseapp.com",
  projectId: "tests-573a8",
  storageBucket: "tests-573a8.appspot.com",
  messagingSenderId: "386998131235",
  appId: "1:386998131235:web:6609c1ed2dad189df12f96",
  measurementId: "G-BDZKQ4H1R5"
};
} else if (BRANCH_DEPLOY === 'master') {
const firebaseConfig = {
  apiKey: "AIzaSyBstMwpx0X5DhEdVgPkf6rjsx_7boiwHAk",
  authDomain: "tests-573a8.firebaseapp.com",
  projectId: "tests-573a8",
  storageBucket: "tests-573a8.appspot.com",
  messagingSenderId: "386998131235",
  appId: "1:386998131235:web:6609c1ed2dad189df12f96",
  measurementId: "G-BDZKQ4H1R5"
};
}

firebase.initializeApp(firebaseConfig);
export default firebase;
export const authFirebase = firebase.auth();
export const storageFirebase = firebase.storage();
export const dbFirebase = firebase.firestore();
// firebase.firestore.setLogLevel('debug');
