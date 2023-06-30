"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const logo = "/assets/logo.png";

  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="fixed w-full xsm:h-[70px] md:h-24 xsm:shadow-none sm:shadow-md shadow-black z-[100] ease-in duration-500">
      {/* Navbar Regular */}
      <div className="navbar">
      {/* flex xsm:bg-transparent sm:bg-gray-dark/90 justify-between items-center w-full h-full px-2 md:text-lg 2xl:px-16 */}
        <div>
        <Image
          src={logo}
          width="55"
          height="20"
          className="cursor-pointer xsm:hidden sm:flex"
          alt="logo"
        />
        </div>
        {/* Navbar Links */}
        <div>
          <ul className="hidden md:flex">
            <Link href="/" className="navbar-logos">
              Home
            </Link>
            <Link href="/" className="navbar-logos">
              About
            </Link>
            <Link href="/" className="navbar-logos">
              Skills
            </Link>
            <Link href="/" className="navbar-logos">
              Projects
            </Link>
            <Link href="/" className="navbar-logos">
              Contact
            </Link>
          </ul>
          <div className="md:hidden cursor-pointer">
            <AiOutlineMenu onClick={handleNav} className="active:scale-95" size={22} />
          </div>
        </div>
      </div>

      {/* Overlay when sidebar is active */}
      <div className={nav ? 'md:hidden fixed left-0 top-0 xsm:w-full xsm:h-screen bg-black/20 ease-in duration-500 active:outline-none' : ''}>
        {/* Sidebar */}
        <div className={nav ? 'sidebar-open' : 'sidebar-closed'}>
          <div>
            <div className="flex justify-between w-full items-center">
              <Image
                src={logo}
                width="55"
                height="20"
                className="cursor-pointer"
                alt="logo"
              />
              <div className="rounded-button">
                <AiOutlineClose onClick={handleNav} size={22} />
              </div>
            </div>
            <div className="border-b border-violet-600/60 my-4 flex items-center justify-center">
              <p className="py-4 tracking-wide uppercase font-light xsm:text-sm sm:text-sm md:text-base">
              DESIGN | DEVELOP | DEPLOY
              </p>
            </div>
          </div>
          {/* Sidebar Links */}
          <div>
            <ul className="flex flex-col">
              <li className="sm:py-6 xsm:py-4">
                <Link href="/" className="sidebar-logos">
                  Home
                </Link>
              </li>
              <li className="sm:py-6 xsm:py-4">
                <Link href="/" className="sidebar-logos">
                  About
                </Link>
              </li>
              <li className="sm:py-6 xsm:py-4">
                <Link href="/" className="sidebar-logos">
                  Skills
                </Link>
              </li>
              <li className="sm:py-6 xsm:py-4">
                <Link href="/" className="sidebar-logos">
                  Projects
                </Link>
              </li>
              <li className="sm:py-6 xsm:py-4">
                <Link href="/" className="sidebar-logos">
                  Contact
                </Link>
              </li>
            </ul>
            {/* Connections on Sidebar */}
            <div className="sm:pt-48 xsm:pt-14">
              <p className="uppercase tracking-widest text-violet-600">
                Let's Connect
              </p>
              <div className="flex flex-row space-x-4 my-6">
                <div className="rounded-button">
                  <FaLinkedin size={24} />
                </div>
                <div className="rounded-button">
                  <FaGithub size={24} />
                </div>
                <div className="rounded-button">
                  <AiOutlineMail size={24} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
