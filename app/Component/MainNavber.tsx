'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavbarComponent() {
   const Select: string = 'text-teal-400'
   const UnSelect: string = 'text-lime-700 hover:text-lime-900 '
   const pathname = usePathname();
   const startPath =(path:string)=>pathname.startsWith(path);

   return (
      <nav className="flex justify-center">
         <div className="p-1 px-2 border rounded-full">
            <ul className="px-4 flex flex-row gap-2 justify-center">
               <li className={`${pathname == '/' ? Select : UnSelect}`}>
                  <Link href="/">Profile </Link>
               </li>
               <li className={`${startPath('/Product') ? Select : UnSelect}`}>
                  <Link href="/Product">Product</Link>
               </li>
               <li className={`${startPath('/Referable') ? Select : UnSelect}`}>
                  <Link href="/Referable">อ้างอิง</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}
