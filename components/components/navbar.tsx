"use client";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";
import classNames from "classnames";
export default function Navbar() {
  return (
    <NavContainer>
      <NavItem href="#main">Home</NavItem>
      <NavItem href="#features">Features</NavItem>
      <NavItem href="#about">About</NavItem>
      <NavItem href="#contact">Contact</NavItem>
    </NavContainer>
  );
}

function NavContainer({ children }: { children: React.ReactNode }) {
  const [hidden, setHidden] = useState(true);
  return (
    <>
      <span
        className="fixed top-5 right-5 z-50 bg-transparent"
        onMouseEnter={() => {
          setHidden(false);
        }}
      >
        {hidden && <Bars3Icon className="h-8 md:h-12" />}
        {!hidden && <XMarkIcon className="h-8 md:h-12" />}
      </span>
      <nav
        onMouseLeave={() => {
          setHidden(true);
        }}
        className={classNames(
          "fixed right-0 z-40 w-48 shadow-xl transition-transform md:w-96",
          hidden ? "translate-x-full" : "translate-x-0"
        )}
      >
        <ul className="text-l h-full space-y-4 bg-gray-900/80 p-4 py-10 text-white sm:text-xl md:space-y-8 md:text-2xl lg:text-3xl">
          {children}
        </ul>
      </nav>
    </>
  );
}

function NavItem({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  return (
    <li className="decoration-accent-primary decoration-4 underline-offset-8 hover:underline">
      <a href={href}>{children}</a>
    </li>
  );
}
