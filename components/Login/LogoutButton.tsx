import { auth } from "@lib/firebase";
import { useSignOut } from "react-firebase-hooks/auth";

import { Button } from "@mantine/core";

const LogoutButton = () => {
  const [signOut] = useSignOut(auth);

  return (
    <Button className="bg-customGray text-text" onClick={() => signOut()}>
      Logout
    </Button>
  );
};

export default LogoutButton;
