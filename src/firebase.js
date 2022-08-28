import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// import admin from "firebase-admin";

export const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
  // credential: admin.credential.cert({
  //   projectId: process.env.FIREBASE_PROJECT_ID,
  //   clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
  //   privateKey: process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
  // }),
  // databaseURL: `https://${process.env.FIREBASE_PROJECT_ID}.firebaseio.com`,
};

firebase.initializeApp(firebaseConfig);

export const provider = new firebase.auth.GoogleAuthProvider();

const auth = firebase.auth();
export default auth;
