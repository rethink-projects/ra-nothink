import {
  addDoc,
  collection,
  DocumentData,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import firebaseInstance from ".";
import { TypeSnnipet } from "../../types";

export const getSnnipetsByCategoryId = async (
  categoryId: string
): Promise<TypeSnnipet[]> => {
  const db = firebaseInstance.db;
  const snnipetPath = collection(db, "snnipets");
  const q = query(snnipetPath, orderBy("timestamp", "desc"));

  const documents = await getDocs(q);
  const allSnnipetsByCategoryId: TypeSnnipet[] = documents.docs
    .map((document: DocumentData) => {
      return { ...document.data(), id: document.id };
    })
    .filter((snnipet: TypeSnnipet) => snnipet.category_id === categoryId);
  return allSnnipetsByCategoryId;
};

export const createSnnipet = async ({
  owner_id,
  content,
  title,
  category_id,
}: Partial<TypeSnnipet>): Promise<TypeSnnipet | undefined> => {
  try {
    const db = firebaseInstance.db;
    const categoryPath = collection(db, "snnipets");
  
    const body: Partial<TypeSnnipet> = {
      title,
      content,
      owner_id,
      category_id,
      likes: [],
      timestamp: serverTimestamp(),
    };

    const docRef = await addDoc(categoryPath, body);
    const newDoc: DocumentData = await getDoc(docRef);
    const response: TypeSnnipet = { ...newDoc.data(), id: newDoc.id };
    return response;
  } catch (err: any) {
    console.warn(err);
  }
};
