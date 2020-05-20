import firebase, { firestore } from "firebase";
import { collectionName } from "models/constants";
import { List, Task } from "../models/models";

export const fetchLists = async () => {
  const snap = await firestore().collection(collectionName.lists).get();
  const data = snap.docs.map((doc) => doc.data() as List);
  return data;
};

export const fetchTasks = async () => {
  const lists = await firestore().collection(collectionName.lists).get();
  const tasks = lists.docs.map(async (doc) => {
    const ref = await firestore()
      .collection(collectionName.lists)
      .doc(doc.id)
      .collection(collectionName.tasks)
      .get();
    return Promise.resolve(ref.docs.map((d) => d.data() as Task));
  });
  return tasks;
};
