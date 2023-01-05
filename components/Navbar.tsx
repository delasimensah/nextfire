import React from "react";
import Link from "next/link";
import { useAuth } from "@lib/contexts/authContextProvider";

import { Button, Avatar } from "@mantine/core";

const Navbar = () => {
  const { user, username } = useAuth();

  const listItem = "";

  return (
    <nav className="flex h-[70px] w-full bg-white fixed top-0 font-bold border-b border-b-customGray z-[99]py-0 px-[10vw]">
      <ul className="flex items-center justify-between w-full h-full p-0 m-0 list-none">
        <li className={`${listItem}`}>
          <Link href="/" passHref>
            <Button className="px-4 py-2 text-white uppercase bg-text roun">
              NXT
            </Button>
          </Link>
        </li>

        {username && (
          <>
            <li className={`${listItem} ml-auto`}>
              <Button className="bg-customGray text-text" onClick={() => {}}>
                Logout
              </Button>
            </li>

            <li className={`${listItem}`}>
              <Link href="/admin" passHref>
                <Button className="bg-customBlue">Write Post</Button>
              </Link>
            </li>

            <li>
              <Link href={`/${username}`} passHref>
                <Avatar src="/hacker.png" radius="xl" />
              </Link>
            </li>
          </>
        )}

        {!username && (
          <li className={`${listItem}`}>
            <Link href="/login" passHref>
              <Button className="text-white bg-customBlue">Login</Button>
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
