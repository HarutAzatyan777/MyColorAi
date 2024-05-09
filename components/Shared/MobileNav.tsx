"use client"

import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../../components/ui/sheet";
import Image from "next/image";
import Link from "next/link";
import { navLinks } from "../../constants";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
  const pathname = usePathname()

  return (
    <header className="header">
      <Link href="/" className="flex items-center gap-2 md:py-2">
        <Image src="/assets/logo.svg" width={150} height={28} alt="logo" />
      </Link>
      <nav className="flex gap-2">
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
          <Sheet>
            <SheetTrigger>
              <Image
                src="/assets/icons/menu.svg"
                width={24}
                height={24}
                alt="menu"
                className="cursor-pointer"
              />

            </SheetTrigger>
            <SheetContent className="sheet-content sm:w-64">
              <>
              <Image
              src="/assets/logo.svg"
              width={152}
              height={24}
              alt="logo" />
                <ul className="header-nav_elements">
              {navLinks.map((link) => {
                const isActive = link.route === pathname

                return (
                  <li className={`${isActive &&
                     "grandient-text"} p-18 flex whitespace-nowrap text-dark-700`}
                   key={link.route} >
                    <Link className="sidebar-link cursor-pointer" href={link.route}>
                      <Image 
                        src={link.icon}
                        alt="logo"
                        width={24}
                        height={24}
                        className={`${isActive && 'brightness-200'}`}
                      />
                      {link.label}
                    </Link>
                  </li>
                )
              })}
              </ul>
              </>
            </SheetContent>
          </Sheet>

          <SignedOut>
<Button asChild className='button bg-purple-gradient bg-cover'>
    <Link href="/sign-in">Login</Link>
</Button>
    </SignedOut>
        </SignedIn>
      </nav>
    </header>
  );
};

export default MobileNav;
