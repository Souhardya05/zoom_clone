"use client";

import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { sideBarLinks } from "@/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";


const MobileNav = () => {
  const pathname = usePathname();
  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/icons/hamburger.svg"
            alt="Menu"
            width={32}
            height={32}
            className="cursor-pointer sm:hidden "
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="bg-[#1C1F2E] border-none"
        >
          <SheetHeader>
            <Link href="/" className="flex items-center gap-1">
              <Image
                src="/icons/logo.svg"
                alt="Logo"
                width={32}
                height={32}
                className="max-sm:size-10"
              />
              <p className="text-[26px] font-extrabold text-white ">Zoom</p>
            </Link>
            <div className="flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto mt-6">
              <SheetClose asChild>
                <section className="flex h-full flex-col gap-6 pt-6 text-white">
                  {sideBarLinks.map((link) => {
                    const isActive =
                      pathname === link.route ||
                      pathname.startsWith(`${link.route}/`);

                    return (


                        <SheetClose asChild key={link.label}>

                      <Link
                        key={link.label}
                        href={link.route}
                        className={cn(
                          "flex gap-4 items-center p-4 rounded-lg w-full max-w-60",
                          { "bg-blue-500": isActive }
                        )}
                      >
                        <Image
                          src={link.imgUrl}
                          alt={link.label}
                          width={20}
                          height={20}
                        />
                        <p className="font-semibold ">
                          {link.label}
                        </p>
                      </Link>
                      </SheetClose>
                    );
                  })}
                </section>
              </SheetClose>
            </div>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
