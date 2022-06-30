import { collection, DocumentData, getDocs, orderBy, query } from "firebase/firestore";
import firebaseInstance from ".";
import { TypeSnnipet } from "../../types";



export const getSnnipetsByCategoryId = async (category_id: string): Promise<TypeSnnipet[]> => {
    const db = firebaseInstance.db;
    const snnipetsPath = collection(db, "snnipets");
    const q = query(snnipetsPath, orderBy("timestamp", "desc"))

    const documents = await getDocs(q);
    const allFiltredSnnipets: TypeSnnipet[] = documents.docs.map((document: DocumentData) => {
        return { ...document.data(), id: document.id };
    }).filter((snnipet: TypeSnnipet) => {
        return snnipet.category_id === category_id
    })

    return allFiltredSnnipets;
}