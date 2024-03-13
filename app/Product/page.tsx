'use client'
import Link from "next/link";

export default function Resume() {
   console.log('aaa');
   return (<>
      <nav>
         <Link href={'/Product/searchText'}>searchText</Link>
      </nav>
      <h1 className="text-4xl font-bold text-center">Resume</h1>
   </>
   );
}
