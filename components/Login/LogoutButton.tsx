import { auth } from "@lib/firebase";
import { useSignOut } from "react-firebase-hooks/auth";

import { Button } from "@mantine/core";

const LogoutButton = () => {
  const [signOut] = useSignOut(auth);

  const handleLogout = async () => {
    await signOut();
  };

  return (
    <Button className="bg-customGray text-text" onClick={handleLogout}>
      Logout
    </Button>
  );
};

export default LogoutButton;
