import { useAuth } from "@lib/hooks";
import { GoogleLoginButton, UsernameForm } from "@components";

const LoginPage = () => {
  const { user, username } = useAuth();

  return (
    <main>
      {user ? !username ? <UsernameForm /> : null : <GoogleLoginButton />}
    </main>
  );
};

export default LoginPage;
