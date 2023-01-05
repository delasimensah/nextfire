import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./contexts/authContextProvider";
import { AuthUserOrNull } from "./customTypes";

export const useAuth = () => useContext(AuthContext);

export const useUserData = () => {
  const [user, setUser] = useState<AuthUserOrNull>(null);
  const [username, setUsername] = useState("");

  useEffect(() => {}, []);

  return { user, username };
};
