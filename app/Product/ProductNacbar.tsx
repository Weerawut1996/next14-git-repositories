'use client'
import Link from "next/link";
import s_nav from "@/app/SupNav.module.css"
import { usePathname } from "next/navigation";

export default function ProductNacbar() {
   const pathname = usePathname();
   console.log(pathname);
   
   return (
      <div className="w-[80%] max-w-[240px] bg-[#5a5a5a] divide-y last:border-t-3">
         <Link className={s_nav.supNav + " block px-2 py-1"} href={'/Product'}>back</Link>
         <Link className={s_nav.supNav + " block px-2 py-1"} href={'/Product/TodoList'}>TodoList</Link>
         <Link className={s_nav.supNav + " block px-2 py-1"} href={'/Product/SearchText'}>SearchText</Link>
         <Link className={s_nav.supNav + " block px-2 py-1"} href={'/Product/Calculater'}>Calculater</Link>
         <Link className={s_nav.supNav + " block px-2 py-1"} href={'/Product/Lottery'}>Lottery</Link>         
         <Link className={s_nav.supNav + " block px-2 py-1"} href={'/Product/Random-Person'}>Random Person</Link>         
      </div>
   );
}