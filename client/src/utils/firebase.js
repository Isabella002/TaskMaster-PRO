import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD6MGLLy6JGpJMDDNhSU3g1sq5IV7xNvHI",
    authDomain: "taskmanager-f6611.firebaseapp.com",
    projectId: "taskmanager-f6611",
    storageBucket: "taskmanager-f6611.appspot.com",
    messagingSenderId: "694079573025",
    appId: "1:694079573025:web:b2e33453e584f0248d6760",
    measurementId: "G-HF59T42WCF"
};

export const app = initializeApp(firebaseConfig);
