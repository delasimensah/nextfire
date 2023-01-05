import { useAuth } from "@lib/hooks";
import { GoogleButton, UsernameForm } from "@components";

const LoginPage = () => {
  const { user, username } = useAuth();

  return (
    <main>{user ? !username ? <UsernameForm /> : null : <GoogleButton />}</main>
  );
};

export default LoginPage;
