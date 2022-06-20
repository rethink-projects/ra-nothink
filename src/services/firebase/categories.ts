import { addDoc, collection, DocumentData, FieldValue, getDoc, serverTimestamp } from "firebase/firestore";
import firebaseInstance from ".";


export type TypeCategory = {
    owner_id: string;
    title: string;
    totalLikes: number;
    totalSnnipets: number;
    timestamp: FieldValue;
}

type TypeCreateCategory = {
    owner_id: string;
    title: string;
}

export const CreateCategory = async ({owner_id, title} : TypeCreateCategory): Promise<TypeCategory | undefined> => {
    try{
        const db = firebaseInstance.db;
        const categoryPath = collection(db, "categories");
        const body: TypeCategory = {
            owner_id,
            title,
            totalLikes: 0,
            totalSnnipets: 0,
            timestamp: serverTimestamp(),
        };
    
        const dofRef = await addDoc(categoryPath, body);
        const newDoc: DocumentData = await getDoc(dofRef);
        const response : TypeCategory = {...newDoc.data()};
    
        return response;
    } catch(error: any){
        console.warn(error);
    }
}