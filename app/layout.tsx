import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "./Component/NavberCompo";
import FooterComponent from "./Component/FooterCompo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
   title: "Home Page",
   description: "Wut Home Page",
};

export default function RootLayout({
   children,
}: {
   children: React.ReactNode;
}) {
   
   return (
      /* tag <html> use only in loop layout.tsx*/
      <html lang="en">
         <body className={inter.className + " pt-7"}>
            <header className="mb-2">
               <NavbarComponent />
            </header>
            {children}
            <FooterComponent />
         </body>
      </html>
   );
}
