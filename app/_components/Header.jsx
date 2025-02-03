"use client";
import { Button } from "@/components/ui/button";
import { UserButton, useUser } from "@clerk/nextjs";
import { LogIn, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

export default function Header() {
  const path = usePathname();
  const { user, isSignedIn } = useUser();
  useEffect(() => {
    console.log(path);
  }, []);

  return (
    <div className="p-6 px-10 flex justify-between shadow-md shadow-secondary fixed top-0 w-full z-10 ">
      <div className="flex gap-12 items-center">
        <Image src={"/logo.svg"} alt="logo" width={150} height={150} />
        <ul className="hidden md:flex gap-10">
          <Link href="/">
            <li
              className={`"hover:text-secondary font-medium cursor-pointer" ${
                path === "/" ? "text-secondary" : ""
              }`}
            >
              For Sale
            </li>
          </Link>
          <li className="hover:text-secondary font-medium cursor-pointer">
            For Rent
          </li>
          <li className="hover:text-secondary font-medium cursor-pointer">
            Agent Finder
          </li>
        </ul>
      </div>
      <div className="flex gap-2 items-center">
        <Button className="flex gap-2">
          <Plus />
          Post Ad Here
        </Button>

        {isSignedIn ? (
          <UserButton />
        ) : (
          <Button variant="outline">
            <LogIn /> Sign In
          </Button>
        )}
      </div>
    </div>
  );
}
