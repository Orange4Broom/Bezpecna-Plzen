import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyA_d0cc2ogBgpT-1zbUapZYf2tjcNcgtYo',
  authDomain: 'bezpecna-plzen.firebaseapp.com',
  projectId: 'bezpecna-plzen',
  storageBucket: 'bezpecna-plzen.appspot.com',
  messagingSenderId: '898082878672',
  appId: '1:898082878672:web:63173da0a6a5420bef9ad5',
  measurementId: 'G-K2Z2CGGE49',
};

//init firebase
firebase.initializeApp(firebaseConfig);

//init firestore service
const projectFirestore = firebase.firestore();

//init auth service
const auth = getAuth();

export { projectFirestore, auth };
