import Image from "next/image";
import { Button } from "@mantine/core";
import { auth } from "@lib/firebase";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const GoogleButton = () => {
  const [signInWithGoogle, _, __, error] = useSignInWithGoogle(auth);

  if (error) {
    console.log("could not sign in");
  }

  return (
    <Button
      leftIcon={<Image src="/google.png" alt="" width={20} height={20} />}
      variant="white"
      className="text-text"
      onClick={() => signInWithGoogle()}
    >
      Login with Google
    </Button>
  );
};

export default GoogleButton;
