import {
  addDoc,
  collection,
  DocumentData,
  getDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import firebaseInstance from ".";
import { TypeCategory, TypeCreateCategory } from "../../types";

export const createCategory = async ({
  owner_id,
  title,
}: TypeCreateCategory) => {
  try {
    const db = firebaseInstance.db;
    const categoryPath = collection(db, "categories");
    const body: TypeCategory = {
      owner_id,
      title,
      totalLikes: 0,
      totalSnippets: 0,
      timestamp: serverTimestamp(),
    };

    const docRef = await addDoc(categoryPath, body);
    // console.log(docRef); - Cria um doc e o firebase me retorna uma referencia
    const newDoc: DocumentData = await getDoc(docRef);
    // console.log(newDoc);  -- busca as informaçoes da ref que foi passado (categoryPath, body)
    const response: TypeCategory = { ...newDoc.data(), id: newDoc.id };
    // console.log(response); -- preenche os campos do meu TypeCategory
    return response;
  } catch (error) {
    console.warn(error);
  }
};

export const getAllCategories = async (): Promise<TypeCategory[]> => {
  const db = firebaseInstance.db;
  const categoryPath = collection(db, "categories");

  const documents = await getDocs(categoryPath);
  const AllCategories: TypeCategory[] = documents.docs.map(
    (document: DocumentData) => {
      return { ...document.data(), id: document.id };
    }
  );
  return AllCategories;
};
