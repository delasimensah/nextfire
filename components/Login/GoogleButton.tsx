import Image from "next/image";
import { Button } from "@mantine/core";
import { auth, googleProvider } from "@lib/firebase";
import { signInWithPopup } from "firebase/auth";

const GoogleButton = () => {
  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
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
