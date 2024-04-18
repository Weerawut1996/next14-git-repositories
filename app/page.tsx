"use client"
import Image from "next/image";
import _s from "@/app/_G.module.css"

export default function Home() {

   return (
      <main className={_s.item3}>
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
