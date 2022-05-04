// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    apiKey: "AIzaSyCaOfVP-6TQdHJVJQ-VIvnFtLJFzYMyZwo",
    authDomain: "pass-guard-1d47c.firebaseapp.com",
    projectId: "pass-guard-1d47c",
    storageBucket: "pass-guard-1d47c.appspot.com",
    messagingSenderId: "36025071859",
    appId: "1:36025071859:web:f0b857e98d6dfccb6e1f86",
    measurementId: "G-88YMRV52YC"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);

export default app;
