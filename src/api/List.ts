import { firestore } from "firebase";
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
    return ref.docs.map((d) => d.data() as Task);
  });
  return tasks;
};

export const addTask = (listId: string, docData: string) => {
  const collection = firestore().collection(collectionName.lists);
  const document = collection.doc(listId);
  const newTask = document.collection(collectionName.tasks).doc();

  return firestore().runTransaction(async (transaction) => {
    await transaction.get(document);
    return transaction.set(newTask, {
      name: docData,
    });
  });
};
