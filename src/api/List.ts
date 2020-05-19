import { firestore } from "firebase";
import { collectionName } from "models/constants";
import { List } from "../models/models";

const fetchLists = async () => {
  const snap = await firestore().collection(collectionName.lists).get();
  const data = snap.docs.map((doc) => doc.data() as List);
  return data;
};

export default fetchLists;
