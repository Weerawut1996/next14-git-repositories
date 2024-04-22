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
      <p className='text-[14px]'>sm:</p>
         <p className='text-[12px]'>ทำงาน wight มากกว่า 640px</p>
         <p className='text-[14px]'>md:</p>
         <p className='text-[12px]'>ทำงาน wight มากกว่า 768px</p>
         <p className='text-[14px]'>lg:</p>
         <p className='text-[12px]'>ทำงาน wight มากกว่า 1024px</p>
         <p className='text-[14px]'>xl:</p>
         <p className='text-[12px]'>ทำงาน wight มากกว่า 1280px</p>
         <p className='text-[14px]'>2xl:</p>
         <p className='text-[12px]'>ทำงาน wight มากกว่า 1536px</p>
      </aside>
   </>
   )
}