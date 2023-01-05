import Image from "next/image";
import { useRouter } from "next/router";
import { Button } from "@mantine/core";
import { auth, googleProvider } from "@lib/firebase";
import { signInWithPopup } from "firebase/auth";
import { useAuth } from "@lib/hooks";
// import { useSignInWithGoogle } from 'react-firebase-hooks/auth'

const GoogleButton = () => {
  const router = useRouter();
  const { username } = useAuth();

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      console.log(username);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Button
      leftIcon={<Image src="/google.png" alt="" width={20} height={20} />}
      variant="white"
      className="text-text"
      onClick={loginWithGoogle}
    >
      Login with Google
    </Button>
  );
};

export default GoogleButton;
