import { Button } from "@mantine/core";
import { showNotification } from "@mantine/notifications";

const HomePage = () => {
  return (
    <main>
      <h1> Homepage</h1>
      <Button
        onClick={() =>
          showNotification({
            message: "Hey there, your code is awesome! 🤥",
            disallowClose: true,
          })
        }
      >
        Toast
      </Button>
    </main>
  );
};

export default HomePage;
