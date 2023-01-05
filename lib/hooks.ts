import { useState, useEffect } from "react";
import { AuthUserOrNull } from "./customTypes";

export const useUserData = () => {
  const [user, setUser] = useState<AuthUserOrNull>(null);
  const [username, setUsername] = useState("");

  useEffect(() => {}, []);

  return { user, username };
};
