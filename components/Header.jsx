"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdOutlineClose } from "react-icons/md";

const path = [
  { name: "Home", path: "/" },
  { name: "Explorers", path: "/explorers" },
  { name: "Organizations", path: "/organizations" },
  { name: "About Us", path: "/about-us" },
  { name: "Join Now", path: "/join-now" },
];

export default function Header() {
  const [toggleNav, setToggleNav] = useState(false);
  const pathName = usePathname();

  return (
    <>
      <div className="flex flex-row justify-between px-4 py-4 shadow-md items-center sticky top-0 right-0  bg-white z-20">
        <Link href={"/"}>
          <Image
            src={"/logo.png"}
            priority
            alt="logo"
            width={150}
            height={150}
            className="w-auto h-auto hover:cursor-pointer cursor-pointer"
          />
        </Link>

        <div
          className="ml-auto md:hidden  cursor-pointer"
          onClick={() => {
            setToggleNav(!toggleNav);
          }}>
          <FiMenu size={30} color="#003a56" />
        </div>

        <nav
          className={`fixed md:hidden bg-gray-100 z-10 h-full w-full top-0 right-0    transform ${
            toggleNav ? "translate-x-0" : "translate-x-full"
          } transition-transform duration-300`}>
          <div className="flex flex-col justify-center items-center relative text-[#003a56]">
            <div className="w-full flex justify-end pr-4">
              <MdOutlineClose
                size={30}
                className="cursor-pointer mt-8"
                color="#003a56"
                onClick={() => setToggleNav(false)}
              />
            </div>
            {path.slice(0, 4).map((nav, idx) => (
              <Link
                onClick={() => setToggleNav(false)}
                href={nav.path}
                key={Math.random() + crypto.randomUUID()}
                className={`${pathName == nav.path ? "font-bold" : ""}`}>
                <li
                  className={`hover:underline pt-8 cursor-pointer list-none `}>
                  {nav.name}
                </li>
              </Link>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center">
            {path.slice(4).map((nav, idx) => (
              <Link
                onClick={() => setToggleNav(false)}
                href={nav.path}
                key={Math.random() + crypto.randomUUID()}
                className={`${pathName == nav.path ? "font-bold" : ""}`}>
                <li className="hover:underline mt-6 px-8 py-3 bg-[#003a56] text-white cursor-pointer list-none rounded-sm">
                  {nav.name}
                </li>
              </Link>
            ))}
          </div>
        </nav>
        <nav className="hidden md:block md:w-[80%] lg:w-2/3 text-[#003a56]">
          <div className="flex mx-12 justify-between items-center">
            {path.map((url, idx) => (
              <Link
                href={url.path}
                key={Math.random() + crypto.randomUUID()}
                className={`${
                  pathName == url.path ? "font-bold text-[#003a56] " : ""
                }`}>
                <li
                  className={` cursor-pointer list-none hover:border-b-2  ${
                    url.name === "Login" || url.name === "Join Now"
                      ? "bg-[#003a56] py-2 px-6 rounded-md text-white"
                      : null
                  }`}>
                  {url.name}
                </li>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </>
  );
}
