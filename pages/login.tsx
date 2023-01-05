import { useAuth } from "@lib/hooks";
import { GoogleLoginButton, UsernameForm, LogoutButton } from "@components";

const LoginPage = () => {
  const { user, username } = useAuth();

  return (
    <main>
      {user ? (
        !username ? (
          <UsernameForm />
        ) : (
          <LogoutButton />
        )
      ) : (
        <GoogleLoginButton />
      )}
    </main>
  );
};

export default LoginPage;
