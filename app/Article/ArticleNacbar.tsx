'use client'
import Link from "next/link";
import s_nav from "@/app/SupNav.module.css"
import { usePathname } from "next/navigation";


export default function ArticleNacbar() {
   const pathname = usePathname();
   return (
      <>
         {pathname != '/Article' ?
            <div className="w-[80%] bg-[#5a5a5a]">
               <Link className={"block px-2 py-1 " + s_nav.supNav} href={'/Article'}>back</Link>
               <Link className={"block px-2 py-1 " + s_nav.supNav} href={'/Article/page1'}>page 1</Link>
               <Link className={"block px-2 py-1 " + s_nav.supNav} href={'/Article/page2'}>page 2</Link>
               <Link className={"block px-2 py-1 " + s_nav.supNav} href={'/Article/page3'}>page 3</Link>
            </div>
            : null}
      </>

   );
}