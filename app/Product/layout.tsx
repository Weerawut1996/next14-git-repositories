import type { Metadata } from 'next'
import Link from "next/link";
import ProductNacbar from './ProductNacbar';

export const metadata: Metadata = {
   title: 'Resume Page',
   description: 'Wut Resume Page',
}

export default function ResumeLayout({
   children, // will be a page or nested layout
}: {
   children: React.ReactNode
}) {
   return (<>
      <nav className='inline-block w-2/12'>
         <ProductNacbar />
      </nav>
      <main className='inline-block w-8/12'>
         {children}
      </main>
      <aside className='inline-block w-2/12 pl-2'>
         <p>asdasd</p>
      </aside>
   </>
   )
}