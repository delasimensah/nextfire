import { createContext, FC, ReactNode, useContext } from "react";
import { AuthUserOrNull } from "../customTypes";
import { useUserData } from "../hooks";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  user: AuthUserOrNull;
  username: string;
};

const AuthContext = createContext({} as AuthContextType);

export const useAuth = () => useContext(AuthContext);

const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
  const { user, username } = useUserData();

  return (
    <AuthContext.Provider value={{ user, username }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
