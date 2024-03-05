import type { Metadata } from 'next'

export const metadata: Metadata = {
   title: 'Cheat Sheet Page',
   description: 'Wut Cheat Sheet Page',
 }

 export default function CheatSheetLayout({
   children, 
 }: {
   children: React.ReactNode
 }) {
   return (
      <main>
      {children}
      </main>
   )
 }