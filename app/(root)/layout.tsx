import React, { ReactNode } from 'react'
import  StreamVideoProvider  from '@/providers/StreamClientProvider'
import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "YOOM",
  description: "Video conferencing app built with Next.js, Stream Video, and Clerk",
  icons: {
    icon: "/icons/logo.svg"
  }
};

const RootLayout = ({children}:Readonly<{children: ReactNode}>) => {
  return (
    
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>

    </main>
  )
}

export default RootLayout
