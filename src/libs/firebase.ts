import firebase from 'firebase/app';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAF26tEgABQZVgpQGs88x0hGfW7mgqySWQ',
  authDomain: 'manetsum-6ced1.firebaseapp.com',
  projectId: 'manetsum-6ced1',
  storageBucket: 'manetsum-6ced1.appspot.com',
  messagingSenderId: '1047549969031',
  appId: '1:1047549969031:web:3661b5e5b711905e15ae22',
  measurementId: 'G-HV8NFQZVBJ',
};

console.log(
  firebase.getApps().length,
  firebase.getApps().length >= 1 ? firebase.getApps()[0].name : null,
);

export default firebase.initializeApp(firebaseConfig);
