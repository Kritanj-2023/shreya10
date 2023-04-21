import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  setDoc,
} from "firebase/firestore";
import { firestore } from '../firestore';

// Saving new Item
export const saveItem = async (data) => {
  await setDoc(doc(firestore, "details", `${Date.now()}`), data,{merge:true,});
};


export const getAllDetails = async () => {
  const details = await getDocs(
    query(collection(firestore, "details"), orderBy("id", "desc"))
  );

  return details.docs.map((doc) => doc.data());
};
