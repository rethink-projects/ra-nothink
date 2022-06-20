import { addDoc, collection, DocumentData, getDoc, serverTimestamp } from "firebase/firestore";
import firebaseInstance from ".";
import { TypeCategory, TypeCreateCategory } from "../../types";

export const createCategory = async ({
    owner_id, title }: TypeCreateCategory): Promise<TypeCategory | undefined> => {

    try {
        const db = firebaseInstance.db;
        const categoryPath = collection(db, "categories");
        const body: TypeCategory = {
            owner_id,
            title,
            totalLikes: 0,
            totalSnnipets: 0,
            timestamp: serverTimestamp(),

        }

        const dofRef = await addDoc(categoryPath, body);
        const newDoc: DocumentData = await getDoc(dofRef);
        const response: TypeCategory = { ...newDoc.data() }
        return response;
    } catch (error) {
        console.warn(error);
    }
}