import { initializeApp } from "firebase/app";
import {
  getAuth,
  connectAuthEmulator,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getStorage, connectStorageEmulator } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCjp5_X_ms4b5ndU0AUyLtF3v_ymxe3oFI",
  authDomain: "nextfire2-8c0af.firebaseapp.com",
  projectId: "nextfire2-8c0af",
  storageBucket: "nextfire2-8c0af.appspot.com",
  messagingSenderId: "390309881654",
  appId: "1:390309881654:web:630b18325e18bb9d3bb597",
};

const app = initializeApp(firebaseConfig);

// auth exports
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

// firestore exports
export const db = getFirestore(app);

// storage exports
export const storage = getStorage(app);

// dev emulators
if (process.env.NODE_ENV !== "production") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
  connectStorageEmulator(storage, "localhost", 9199);
}
