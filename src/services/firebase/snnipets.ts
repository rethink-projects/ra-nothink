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
  category_id: string
): Promise<TypeSnnipet[]> => {
  const db = firebaseInstance.db;
  const snnipetPath = collection(db, "snnipets");
  const q = query(snnipetPath, orderBy("timestamp", "desc"));
  const documents = await getDocs(q);
  const allFiltredSnnipets: TypeSnnipet[] = documents.docs
    .map((document: DocumentData) => {
      return { ...document.data(), id: document.id };
    })
    .filter((snnipet: TypeSnnipet) => snnipet.category_id === category_id);

  return allFiltredSnnipets;
};

export const createSnnipet = async ({
  owner_id,
  title,
  content,
  category_id,
}: Partial<TypeSnnipet>): Promise<TypeSnnipet | undefined> => {
  try {
    const db = firebaseInstance.db;
    const snnipetPath = collection(db, "snnipets");

    const body: Partial<TypeSnnipet> = {
      title,
      content,
      owner_id,
      category_id,
      likes: [],
      timestamp: serverTimestamp(),
    };

    const dofRef = await addDoc(snnipetPath, body);

    const newDoc: DocumentData = await getDoc(dofRef);
    const response: TypeSnnipet = { ...newDoc.data(), id: newDoc.id };
    return response;
  } catch (error: any) {
    console.warn(error);
  }
};
