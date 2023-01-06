import { useRouter } from "next/router";
import { useAuth } from "@lib/hooks";
import { GoogleLoginButton, UsernameForm } from "@components";

const LoginPage = () => {
  const router = useRouter();
  const { user, username, loading, loadingUsername } = useAuth();

  if (user && username) {
    router.push("/");
  }

  if (loading && !user) return null;

  return (
    <main>
      {user && !loading ? (
        !username && !loadingUsername ? (
          <UsernameForm />
        ) : null
      ) : (
        <GoogleLoginButton />
      )}
    </main>
  );
};

export default LoginPage;
