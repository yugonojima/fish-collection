import firebase from "firebase";
import { Creature } from "../types/creature";

firebase.initializeApp({
  apiKey: "AIzaSyDXWyKHK-lMiqOwOU2wOHxylUhFXDD4Hpg",
  authDomain: "fish-collection.firebaseapp.com",
  databaseURL: "https://fish-collection.firebaseio.com",
  projectId: "fish-collection",
});

const db = firebase.firestore();

export const getCreatures = async () => {
  const snapshot = await db.collection("creatures").get();
  const creatures = snapshot.docs.map(
    (doc) => ({ ...doc.data(), id: doc.id } as Creature)
  );

  return creatures;
};
