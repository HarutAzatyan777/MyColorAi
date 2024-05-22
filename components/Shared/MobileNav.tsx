"use client";

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "../../components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { useState } from "react";

const MobileNav = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const closeSheet = () => {
    setIsOpen(false);
  };

  return (
    <header className="header flex items-center justify-between px-4 py-2">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/assets/logo.svg" width={150} height={28} alt="logo" />
      </Link>
      <nav className="flex items-center gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Image
                src="/assets/icons/menu.svg"
                width={24}
                height={24}
                alt="menu"
                className="cursor-pointer"
              />
            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64 p-4">
              <Image
                src="/assets/logo.svg"
                width={152}
                height={24}
                alt="logo"
                className="mb-4"
              />
              <ul className="header-nav_elements">
                {navLinks.map((link) => {
                  const isActive = link.route === pathname;

                  return (
                    <li
                      className={`p-4 flex items-center gap-2 whitespace-nowrap ${
                        isActive ? "gradient-text" : "text-dark-700"
                      }`}
                      key={link.route}
                    >
                      <Link href={link.route} className="flex items-center gap-2" onClick={closeSheet}>
                        <Image
                          src={link.icon}
                          alt={link.label}
                          width={24}
                          height={24}
                          className={`${isActive ? "brightness-200" : ""}`}
                        />
                        {link.label}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </SheetContent>
          </Sheet>
        </SignedIn>

        <SignedOut>
          <Button asChild className="button bg-sky-500/100 bg-cover">
            <Link href="/sign-in">Login</Link>
          </Button>
        </SignedOut>
      </nav>
    </header>
  );
};

export default MobileNav;
