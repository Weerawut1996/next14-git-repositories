import Image from "next/image";
import React from "react";


import { version } from 'react';
const ver = React.version;
const ver2 = version;



export default function Home() {
  
   return (
      <main>
         <p>React.version : {ver}</p>
         <p>version       : {ver2}</p>
         <h1 className="text-4xl font-bold text-center">Home</h1>
         
         <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert text-center"
            src="/next.svg"
            alt="Next.js Logo"
            width={180}
            height={37}
            priority
         />
      </main>
   );
}
