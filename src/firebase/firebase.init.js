import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCqhB4ibWFCPbhM-FJ_8NYmC1dVOveWuAA",
  authDomain: "edu-lab-c652d.firebaseapp.com",
  projectId: "edu-lab-c652d",
  storageBucket: "edu-lab-c652d.appspot.com",
  messagingSenderId: "80941606676",
  appId: "1:80941606676:web:eff44a80042d5953f3c401"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;