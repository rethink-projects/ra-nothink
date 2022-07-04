import {
  addDoc,
  collection,
  doc,
  DocumentData,
  FieldValue,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  Timestamp,
} from "firebase/firestore";
import firebaseInstance from ".";
import { TypeCategory, TypeCreateCategory } from "../../types";

export const createCategory = async ({
  owner_id,
  title,
}: TypeCreateCategory): Promise<TypeCategory | undefined> => {
  try {
    const db = firebaseInstance.db;
    const categoryPath = collection(db, "categories");
    const body: TypeCategory = {
      title,
      owner_id,
      totalLikes: 0,
      totalSnnipets: 0,
      timestamp: serverTimestamp(),
    };

    const docRef = await addDoc(categoryPath, body);
    const newDoc: DocumentData = await getDoc(docRef);
    const response: TypeCategory = { ...newDoc.data(), id: newDoc.id };
    return response;
  } catch (error: any) {
    console.warn(error);
  }
};

export const getAllCategories = async (): Promise<TypeCategory[]> => {
  const db = firebaseInstance.db;
  const categoryPath = collection(db, "categories");
  const q = query(categoryPath, orderBy("timestamp", "desc"));

  const documents = await getDocs(q);

  const allCategories: TypeCategory[] = documents.docs.map((document: DocumentData) => {
      return { ...document.data(), id: document.id };
    });

  return allCategories;
};
