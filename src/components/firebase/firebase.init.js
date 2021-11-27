import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import "firebase/storage";
import { getStorage } from "firebase/storage";
const FirebaseInitialize = () => {
  initializeApp(firebaseConfig);
};
const storage = getStorage(FirebaseInitialize());

export { FirebaseInitialize as default, storage };
