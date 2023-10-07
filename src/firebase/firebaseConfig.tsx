// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getMessaging } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAvtBS8CjF8SaBK2i3Zw97S3FA8g6yQszs",
  authDomain: "apple-store-80798.firebaseapp.com",
  projectId: "apple-store-80798",
  storageBucket: "apple-store-80798.appspot.com",
  messagingSenderId: "339301666719",
  appId: "1:339301666719:web:2f74006a29f8832dc337aa",
  measurementId: "G-2Q93KK431H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const messaging = getMessaging(app);

export type FirebaseMessaging = typeof messaging;

export { app, analytics, messaging };
