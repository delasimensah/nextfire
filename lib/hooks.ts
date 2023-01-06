import { useState, useEffect, useContext } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { AuthContext } from "@lib/contexts/authContextProvider";
import { AuthUserOrNull } from "@lib/customTypes";
import { auth, db } from "@lib/firebase";
import { doc, onSnapshot } from "firebase/firestore";

export const useAuth = () => useContext(AuthContext);

export const useUserData = () => {
  const [user, loading, error] = useAuthState(auth);
  const [username, setUsername] = useState("");
  const [authUser, setAuthUser] = useState<AuthUserOrNull>(null);
  const [loadingUsername, setLoadingUsername] = useState(false);

  if (error) {
    console.log(error);
  }

  useEffect(() => {
    if (!user) {
      setUsername("");
      setAuthUser(null);
      return;
    }

    const usernameDocRef = doc(db, "users", `${user.uid}`);

    setAuthUser({
      uid: user.uid,
      email: user.email,
      photoUrl: user.photoURL,
    });

    setLoadingUsername(true);

    const unsub = onSnapshot(usernameDocRef, (doc) => {
      setUsername(doc.data()?.username);
      setLoadingUsername(false);
    });

    return unsub;
  }, [user]);

  return { user: authUser, username, loading, loadingUsername };
};
