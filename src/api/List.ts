import { firestore } from "firebase";
import { collectionName } from "models/constants";
import { List, Task } from "../models/models";

export const fetchLists = async () => {
  const snap = await firestore().collection(collectionName.lists).get();
  const data = snap.docs.map((doc) => doc.data() as List);
  return data;
};

export const fetchTasks = async (taskId: number) => {
  const ref = await firestore().collection(collectionName.lists).get();
  const docId = ref.docs[taskId].id;
  const snap = await firestore()
    .collection(collectionName.lists)
    .doc(docId)
    .collection(collectionName.tasks)
    .get();
  console.log(docId);
  const data = snap.docs.map((doc) => doc.data() as Task);
  return data;
};
