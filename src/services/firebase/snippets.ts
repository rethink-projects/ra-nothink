import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
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
