import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB6loHY4vq4vMQyymU3aM8XUsyUuhSympY",
  authDomain: "reactvd-ec66c.firebaseapp.com",
  projectId: "reactvd-ec66c",
  storageBucket: "reactvd-ec66c.firebasestorage.app",
  messagingSenderId: "860215731123",
  appId: "1:860215731123:web:cd5dfaf4b8f06ddf89a1c6",
  measurementId: "G-L913V7T3F2",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(analytics);
export const auth = getAuth(app);
console.log(auth, "auth");
