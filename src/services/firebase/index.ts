// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "./config";
import { loginWithFirebase } from "./authentication";
import { createCategory, getAllCategories } from "./categories";
import { getSnippetsByCategoryId } from "./snippets";

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);

const firebaseInstance = {
  app,
  db,
  loginWithFirebase,
  createCategory,
  getAllCategories,
  getSnippetsByCategoryId,
};

export default firebaseInstance;
