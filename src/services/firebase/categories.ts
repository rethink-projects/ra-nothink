import {
  addDoc,
  collection,
  DocumentData,
  FieldValue,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import firebaseInstance from ".";
import { TypeCategory, TypeCreateCategory } from "../../types";
// export type TypeCategory = {
//   owner_id: string;
//   title: string;
//   totalLikes: number;
//   totalSnnipets: number;
//   timeStamp: FieldValue;
// };

// export type TypeCreateCategory = { owner_id: string; title: string };

export const createCategory = async ({
  owner_id,
  title,
}: TypeCreateCategory): Promise<TypeCategory | undefined> => {
  try {
    const db = firebaseInstance.db;
    const categoryPath = collection(db, "categories");
    const body: TypeCategory = {
      owner_id,
      title,
      totalLikes: 0,
      totalSnnipets: 0,
      timeStamp: serverTimestamp(),
    };

    const docRef = await addDoc(categoryPath, body);
    const newDoc: DocumentData = await getDoc(docRef);
    const response: TypeCategory = { ...newDoc.data() };
    return response;
  } catch (err: any) {
    console.warn(err);
  }
};
