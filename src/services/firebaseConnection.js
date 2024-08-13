import 'firebase/database';
import 'firebase/auth';
import { initializeApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBiyocPL8Y2Rv0uewQCwd-LS51XP7Abzls",
  authDomain: "meuapp-680bc.firebaseapp.com",
  databaseURL: "https://meuapp-680bc-default-rtdb.firebaseio.com",
  projectId: "meuapp-680bc",
  storageBucket: "meuapp-680bc.appspot.com",
  messagingSenderId: "907442326210",
  appId: "1:907442326210:web:9973bf4ce1a5d100de095b",
  measurementId: "G-FS8NTMMHQB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Auth with AsyncStorage persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export { app, auth };
