import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavbarComponent from "./Component/MainNavber";
import FooterComponent from "./Component/MainFooter";
import Script from "next/script";
import styles from './styles.module.css'
import React, { version } from 'react';


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
   const ReactVersion = [React.version, version];
   // เช็ค Version ของ React สามารถใช้ React.version หรือ version ก็ได้ output เหมือนกัน
   return (
      /* tag <html> use only in loop layout.tsx*/
      <html lang="en">
         <body className={inter.className + " "}>
            <header className="mb-2 mt-6">
               <NavbarComponent />
            </header>
            {children}
            <FooterComponent />
            <Script async>{`document.addEventListener('selectstart', event => event.preventDefault());`}</Script>
            <div>
               <div className="inline-grid grid-cols-[auto_auto] gap-x-2">
                  <p className="text-center">React.version</p>
                  <p>: {ReactVersion[0]}</p>
                  <p className="text-center">version</p>
                  <p>: {ReactVersion[1]}</p>
               </div>
               <p>เช็ค Version ของ React สามารถใช้ <span>React</span>.<span>version</span> หรือ <span>version</span> ก็ได้ output เหมือนกัน</p>
            </div>
            <p className={`css-${styles.asd}`} >asdasd</p>
         </body>
      </html>
   );
}
