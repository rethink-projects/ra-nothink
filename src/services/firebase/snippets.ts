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
import { TypeSnippet } from "../../types";

export const getSnippetsByCategoryId = async (
  category_id: string
): Promise<TypeSnippet[]> => {
  const db = firebaseInstance.db;
  const snippetPath = collection(db, "snippets");
  const q = query(snippetPath, orderBy("timestamp", "desc"));
  const documents = await getDocs(q);
  const allFilteredSnippets: TypeSnippet[] = documents.docs
    .map((document: DocumentData) => {
      return { ...document.data(), id: document.id };
    })
    .filter((snippet: TypeSnippet) => snippet.category_id === category_id);

  return allFilteredSnippets;
};

export const createSnippet = async ({
  owner_id,
  title,
  content,
  category_id,
}: Partial<TypeSnippet>): Promise<TypeSnippet | undefined> => {
  try {
    const db = firebaseInstance.db;
    const snippetPath = collection(db, "snippets");

    const body: Partial<TypeSnippet> = {
      title,
      content,
      owner_id,
      category_id,
      likes: 0,
      timestamp: serverTimestamp(),
    };

    const dofRef = await addDoc(snippetPath, body);

    const newDoc: DocumentData = await getDoc(dofRef);
    const response: TypeSnippet = { ...newDoc.data(), id: newDoc.id };
    return response;
  } catch (error: any) {
    console.warn(error);
  }
};
