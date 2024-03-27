"use client"
import Link from "next/link"
import _s from "./_G.module.css"
import { usePathname } from "next/navigation";


export default function Custom404() {
   const pathname = usePathname();
   const cssArr = [
      "mb-1 mx-auto px-2 py-1 text-center",
      "inline-block w-[100px] border rounded-full border-slate-800 hover:border-slate-600",
   ]
   return (
      <main className={_s.item3}>
         <p className={cssArr[0]}><Link href={'/'} className={cssArr[1]}>&#60;&#60; Home</Link> Page Not Found</p>
         <p className="flex items-end gap-2 justify-center text-[24px]/[1]">
            <span className="">Page :</span>
            <span className="text-[14px]">{pathname}</span>
            </p>
         <p className="py-2 text-center font-medium text-[100px]/[1.125]">- 404 -</p>    
      </main>
   )
}