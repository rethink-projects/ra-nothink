import {
  collection,
  DocumentData,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import firebaseInstance from ".";
import { TypeSnnipet } from "../../types";

export const getSnnipetsByCategoryId = async (
  category_id: string
): Promise<TypeSnnipet[]> => {
  const db = firebaseInstance.db;
  const snnipetPath = collection(db, "snnipets");
  // filtra as categorias pela ordem de criação
  const q = query(snnipetPath, orderBy("timestamp", "desc"));

  const documents = await getDocs(q);

  const allFiltredSnnipets: TypeSnnipet[] = documents.docs
    .map((document: DocumentData) => {
      return { ...document.data(), id: document.id };
    })
    .filter((snnipet: TypeSnnipet) => snnipet.category_id === category_id);
  return allFiltredSnnipets;
};
