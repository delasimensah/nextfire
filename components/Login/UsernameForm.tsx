import { useState } from "react";
import { useAuth } from "@lib/hooks";
import { TextInput, Button } from "@mantine/core";
import { LogoutButton } from "@components";

const UsernameForm = () => {
  const [formValue, setFormValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [loading, setLoading] = useState(false);

  const { user, username } = useAuth();

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <section className="space-y-5">
      <h1>Choose Your Username</h1>

      <form className="space-y-3" onSubmit={handleSubmit}>
        <TextInput
          name="username"
          placeholder="your username"
          value={formValue}
          onChange={handleChange}
        />

        <Button type="submit" className="text-white bg-customGreen">
          Choose
        </Button>

        <LogoutButton />
      </form>
    </section>
  );
};

export default UsernameForm;
