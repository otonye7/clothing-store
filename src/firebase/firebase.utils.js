import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBVD7R1MmMgre-GIsuhSjbe9u8GzLgSJG4",
    authDomain: "samo-sports.firebaseapp.com",
    projectId: "samo-sports",
    storageBucket: "samo-sports.appspot.com",
    messagingSenderId: "564544333048",
    appId: "1:564544333048:web:37d2c4510f2cc9c0ab470d",
    measurementId: "G-S0P746ZKQT"
  };

  export const createUserProfileDocument = async( userAuth, additionalData) => {
    if(!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();
    if(!snapShot.exists) {
      const {displayName, email} = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        })
      } catch (error) {
        console.log(error.message);
      }
    }
    return userRef;
  }

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt: 'select_account'});

  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;