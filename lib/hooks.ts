import { useState, useEffect, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from "@lib/contexts/authContextProvider";
import { AuthUserOrNull } from "@lib/customTypes";
import { auth, db } from "@lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export const useAuth = () => useContext(AuthContext);

export const useUserData = () => {
  const [user] = useAuthState(auth);
  const [username, setUsername] = useState("");
  const [authUser, setAuthUser] = useState<AuthUserOrNull>(null);

  useEffect(() => {
    if (!user) {
      setUsername("");
      setAuthUser(null);
      return;
    }

    setAuthUser({
      uid: user?.uid as string,
      email: user?.email as string,
      photoUrl: user?.photoURL as string,
    });

    const unsub = onSnapshot(doc(db, "users", `${user?.uid}`), (doc) => {
      setUsername(doc.data()?.username);
    });

    return unsub;
  }, [user]);

  return { user: authUser, username };
};
