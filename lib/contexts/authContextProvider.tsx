import { createContext, FC, ReactNode } from "react";
import { AuthUserOrNull } from "../customTypes";
import { useUserData } from "../hooks";

type AuthProviderProps = {
  children: ReactNode;
};

type AuthContextType = {
  user: AuthUserOrNull;
  username: string;
  loading?: boolean;
  loadingUsername?: boolean;
};

export const AuthContext = createContext({} as AuthContextType);

const AuthContextProvider: FC<AuthProviderProps> = ({ children }) => {
  const { user, username, loading, loadingUsername } = useUserData();

  return (
    <AuthContext.Provider value={{ user, username, loading, loadingUsername }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
