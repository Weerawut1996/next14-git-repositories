import type { Metadata } from 'next'
import _s from "@/app/_G.module.css"

export const metadata: Metadata = {
   title: 'Referable Page',
   description: 'Wutmilyer Referable Page',
}

export default function ReferableLayout({
   children, // will be a page or nested layout
}: {
   children: React.ReactNode
}) {
   return (<>
      <nav className={_s.item2}>
      </nav>
      <main  className={_s.item3}>
         {children}
      </main>
      <aside className={_s.item4}>
         <p>อ้างอิง page</p>
      </aside>
   </>
   )
}