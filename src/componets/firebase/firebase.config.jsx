// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDX-YquwHDlwk3yyT3ZVwksA71ls6NKXXM',
  authDomain: 'protfolio-e4fad.firebaseapp.com',
  projectId: 'protfolio-e4fad',
  storageBucket: 'protfolio-e4fad.appspot.com',
  messagingSenderId: '375315147768',
  appId: '1:375315147768:web:bc38e38cf192aebfa6440d',
  measurementId: 'G-NV2Z6QZE4L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;
