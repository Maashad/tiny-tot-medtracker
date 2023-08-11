import React from "react";
import ReactDOM from "react-dom/client";
import { initializeApp } from "firebase/app";
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const firebaseConfig = {
  apiKey: "AIzaSyCBGkg-9BbkBlWDu_LjxC1CugAtXJVky4Q",
  authDomain: "tiny-tot.firebaseapp.com",
  databaseURL: "https://tiny-tot-default-rtdb.firebaseio.com",
  projectId: "tiny-tot",
  storageBucket: "tiny-tot.appspot.com",
  messagingSenderId: "985262874098",
  appId: "1:985262874098:web:9d5aaef0b64f8a77781f6b"
};

initializeApp(firebaseConfig);