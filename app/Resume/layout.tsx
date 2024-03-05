import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Resume Page',
   description: 'Wut Resume Page',
 }

 export default function ResumeLayout({
   children, // will be a page or nested layout
 }: {
   children: React.ReactNode
 }) {
   return (
      <main>
      {children}
      </main>
   )
 }