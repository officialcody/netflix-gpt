// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDO2SJeLRA9HUfv_0Ho0GAy5KS1KhR60f0",
  authDomain: "netfilx-gpt-1ab2c.firebaseapp.com",
  projectId: "netfilx-gpt-1ab2c",
  storageBucket: "netfilx-gpt-1ab2c.appspot.com",
  messagingSenderId: "6879908163",
  appId: "1:6879908163:web:1da2af284a8964ccfcdff6",
  measurementId: "G-8FCVJYZBNF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
