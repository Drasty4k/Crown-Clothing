import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCMaEWysjkXfvPyqnJn5kZPwsE3k-hAUD0",
  authDomain: "crown-clothing-a66e3.firebaseapp.com",
  projectId: "crown-clothing-a66e3",
  storageBucket: "crown-clothing-a66e3.appspot.com",
  messagingSenderId: "415096481040",
  appId: "1:415096481040:web:3c92a47fff2fc145e13195",
  measurementId: "G-M198BJG4VD",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  const { displayName, email } = userAuth;

  if (!snapShot.exist) {
    try {
      await userRef.set({
        displayName,
        email,
        createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  } else if (!snapShot.data().displayName) {
    await userRef.update({
      displayName,
    });
  }

  return userRef;
};

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections) => {
  const transformedCollection = collections.docs.map((doc) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
