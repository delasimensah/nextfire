import { useState, useEffect, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from "./contexts/authContextProvider";
import { AuthUserOrNull } from "./customTypes";
import { auth, db } from "@lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export const useAuth = () => useContext(AuthContext);

export const useUserData = () => {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState("");
  const [authUser, setAuthUser] = useState<AuthUserOrNull>(null);

  useEffect(() => {
    if (!user) setUsername("");

    setAuthUser({
      uid: user?.uid as string,
      email: user?.email as string,
      photoUrl: user?.photoURL as string,
    });

    const ref = doc(db, "users", `${user?.uid}`);

    const unsub = onSnapshot(ref, (doc) => {
      setUsername(doc.data()?.username);
    });

    return unsub;
  }, [user]);

  return { user: authUser, username };
};
