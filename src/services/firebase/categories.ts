import { addDoc, collection, DocumentData, FieldValue, getDoc, serverTimestamp, Timestamp } from "firebase/firestore";
import firebaseInstance from ".";
import { TypeCategory, TypeCreateCategory } from "../../types";


export const createCategory = async ({owner_id,title,}: TypeCreateCategory): Promise<TypeCategory | undefined> => {
    try {
        const db = firebaseInstance.db;
        const categoryPath = collection(db, "categories");
        const body: TypeCategory = {
            title,
            owner_id,
            totalLikes: 0,
            totalSnnipets: 0,
            timesTamp: serverTimestamp(),
        };

        const docRef = await addDoc(categoryPath, body);
        const newDoc: DocumentData = await getDoc(docRef);
        const response: TypeCategory = { ...newDoc.data()}
        return response;
    } catch (error:any) {
        console.warn(error);
    }
}