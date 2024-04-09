import type { Metadata } from 'next'
import ArticleNacbar from './ArticleNacbar';
import _s from "@/app/_G.module.css"

export const metadata: Metadata = {
   title: 'Article Page',
   description: 'Wutmilyer Article Page',
}

export default function ArticleLayout({
   children, // will be a page or nested layout
}: {
   children: React.ReactNode
}) {
   return (<>
      <nav className={_s.item2}>
         <ArticleNacbar />
      </nav>
      <main  className={_s.item3}>
         {children}
      </main>
      <aside className={_s.item4}>
         <p>Article page</p>
      </aside>
   </>
   )
}