import React, { ReactNode } from "react";


import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "YOOM",
  description: "Video conferencing app built with Next.js, Stream Video, and Clerk",
  icons: {
    icon: "/icons/logo.svg"
  }
};

const RootLayout = ({ children }: Readonly<{children: ReactNode}>) => {
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <Sidebar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div  className="w-full">{children}</div>
          
        </section>
      </div>
      Footer
    </main>
  );
};

export default RootLayout;
