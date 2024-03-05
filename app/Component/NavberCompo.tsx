import Link from "next/link";

export default function NavbarComponent() {
   return (
      <nav className="flex justify-center">
         <div className="p-1 px-2 border rounded-full">
            <ul className="px-4 flex flex-row gap-2 justify-center ">
               <li><Link className="hover:text-neutral-400 p-1" href="/">Profile</Link></li>
               <li><Link className="hover:text-neutral-400 p-1" href="/Resume">Product</Link></li>
               <li><Link className="hover:text-neutral-400 p-1" href="/Referable">อ้างอิง</Link></li>
            </ul>
         </div>
      </nav>
   );
}
