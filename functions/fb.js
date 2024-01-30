
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage  } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBbNZJmvQ0skScnAVWuQxrrTMXaZw0eYQY",
  authDomain: "logicians-ghana.firebaseapp.com",
  databaseURL: "https://logicians-ghana.firebaseio.com",
  projectId: "logicians-ghana",
  storageBucket: "logicians-ghana.appspot.com",
  messagingSenderId: "47563389294",
  appId: "1:47563389294:web:4c9fca57feafc2cd9aa97f",
  measurementId: "G-36M8NZB5BP"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
export const auth = getAuth(app)
