"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { UserButton, useUser } from "@clerk/nextjs";

const Nav = () => {
  const { user, isLoaded } = useUser();
  useEffect(() => {
    console.log(user);
    console.log(isLoaded);
  }, []);

  return (
    <header>
      <nav
        className={`flex items-center justify-between p-6 h-20 text-lg text-white
      `}
      >
        <Link
          href={`/`}
          className={``}
        >
          HOME PAGE
        </Link>
        {isLoaded && user ? (
          <div className={`flex gap-4`}>
            <Link
              href={`/dashboard`}
              className={``}
            >
              DASHBOARD
            </Link>
            <UserButton afterSignOutUrl="/" />
          </div>
        ) : (
          <Link
            href={`/login`}
            className={``}
          >
            LOGIN
          </Link>
        )}
      </nav>
    </header>
  );
};

export default Nav;
