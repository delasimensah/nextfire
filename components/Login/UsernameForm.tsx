import { useState, useEffect, ChangeEvent, FormEvent } from "react";
import { doc, getDoc, writeBatch } from "firebase/firestore";
import { useAuth } from "@lib/hooks";
import { db } from "@lib/firebase";
import { TextInput, Button } from "@mantine/core";
import { useDebouncedValue } from "@mantine/hooks";

const UsernameForm = () => {
  const [formValue, setFormValue] = useState("");
  const [isValid, setIsValid] = useState(false);
  const [checking, setChecking] = useState(false);
  const [debounced] = useDebouncedValue(formValue, 600);
  let message;
  let classes;

  if (checking) {
    message = "Checking...";
    classes = "";
  } else if (isValid) {
    message = `${formValue} is available`;
    classes = "text-customGreen";
  } else if (formValue.length >= 3 && !isValid) {
    message = "That username is taken";
    classes = "text-customRed";
  } else {
    message = "";
    classes = "";
  }

  const { user, username } = useAuth();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value.toLowerCase();
    const regex = /^(?=[a-zA-Z0-9._]{3,15}$)(?!.*[_.]{2})[^_.].*[^_.]$/;

    if (value.length < 3) {
      setFormValue(value);
      setChecking(false);
      setIsValid(false);
    }

    if (regex.test(value)) {
      setFormValue(value);
      setChecking(true);
      setIsValid(false);
    }
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userDocRef = doc(db, "users", user?.uid as string);
    const usernameDocRef = doc(db, "usernames", formValue);

    const batch = writeBatch(db);

    batch.set(userDocRef, {
      uid: user?.uid,
      username: formValue,
      photoUrl: user?.photoUrl,
    });
    batch.set(usernameDocRef, { uid: user?.uid });

    await batch.commit();
  };

  const checkUsername = async (username: string) => {
    if (username.length >= 3) {
      const docRef = doc(db, "usernames", username);
      const docSnap = await getDoc(docRef);
      setIsValid(!docSnap.exists());
      setChecking(false);
    }
  };

  useEffect(() => {
    checkUsername(debounced);
  }, [debounced]);

  return (
    <>
      {!username && (
        <section className="space-y-5">
          <h1>Choose Your Username</h1>

          <form className="space-y-3" onSubmit={handleSubmit}>
            <TextInput
              name="username"
              placeholder="your username"
              value={formValue}
              onChange={handleChange}
            />

            <p className={`${classes}`}>{message}</p>

            <Button type="submit" className="text-white bg-customGreen ">
              Choose
            </Button>
          </form>
        </section>
      )}
    </>
  );
};

export default UsernameForm;
