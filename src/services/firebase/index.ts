import { initializeApp } from "firebase/app";

import { firebaseConfig } from "./config";

// Initialize Firebase
const app = initializeApp(firebaseConfig);

console.log({app})
