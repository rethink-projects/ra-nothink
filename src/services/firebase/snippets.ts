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
  const allFiltredSnippets: TypeSnippet[] = documents.docs
    .map((document: DocumentData) => {
      return { ...document.data(), id: document.id };
    })
    .filter((snippet: TypeSnippet) => snippet.category_id === category_id);

  return allFiltredSnippets;
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
      owner_id,
      title,
      content,
      likes: [],
      category_id,
      timestamp: serverTimestamp(),
    };

    const docRef = await addDoc(snippetPath, body);
    const newDoc: DocumentData = await getDoc(docRef);
    const response: TypeSnippet = { ...newDoc.data(), id: newDoc.id };
    return response;
  } catch (error) {
    console.warn(error);
  }
};
