import type { Metadata } from "next";
import "./globals.css";

import Navbar from './component/Navbar'

export const metadata: Metadata = {
  title: "SDG Edulab",
  description: "this is task for nasa space",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased `}
      >
        <Navbar/>
        <video autoPlay muted loop className="fixed bottom-[145px] lg:bottom-[70px] xl:bottom-0 left-0 bject-cover w-full scale-y-[1.70] lg:scale-y-[1.30] xl:scale-y-100 h-fit -z-30 hidden md:block">
          <source src="/WhatsApp Video 2024-09-29 at 14.13.19_8dba27c7.mp4" type="video/mp4"></source>
        </video>
        {children}
      </body>
    </html>
  );
}
