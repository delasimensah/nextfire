import React from "react";
import Link from "next/link";
import { useAuth } from "@lib/hooks";

import { Button, Avatar } from "@mantine/core";
import { LogoutButton } from "@components";

const Navbar = () => {
  const { user, username } = useAuth();

  const listItem = "";

  return (
    <nav className="flex h-[70px] w-full bg-white fixed top-0 font-bold border-b border-b-customGray z-[99]py-0 px-[10vw]">
      <div className="flex items-center justify-between w-full h-full p-0 m-0 list-none">
        <Link href="/" passHref>
          <Button className="text-white uppercase bg-text">NXT</Button>
        </Link>

        {username && (
          <ul className="flex items-center space-x-1 list-none">
            <li className={`${listItem} ml-auto`}>
              <LogoutButton />
            </li>

            <li className={`${listItem}`}>
              <Link href="/admin" passHref>
                <Button className="text-white bg-customBlue">Write Post</Button>
              </Link>
            </li>

            <li>
              <Link href={`/${username}`} passHref>
                <Avatar src={user?.photoUrl || "/hacker.png"} radius="xl" />
              </Link>
            </li>
          </ul>
        )}

        {!username && (
          <li className={`${listItem}`}>
            <Link href="/login" passHref>
              <Button className="text-white bg-customBlue">Login</Button>
            </Link>
          </li>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
