"use client"
import _s from "@/app/_G.module.css"
import DayAndTime from '@/app/Component/DayAndTimer'
import useWindowWidthAndHeight from "./WindowWidthAndHeight";

export default function FooterComponent() {
   const year = new Date().getFullYear();
   const { Day, Month, Time } = DayAndTime()
   const { Width, Height } = useWindowWidthAndHeight();

   return (
      <footer className={`${_s.item5}`}>
         <p className="text-center"> Footer  &#169; 2024 - {year} {Time}</p>
         <p className="text-center">{Day} {Month}</p>         
         <p id="window-width" className="text-center text-[#363636]" >Width: {Width} px</p>
         {/* <p id="window-height" className="text-[7px]"  >Height: {Height} px</p> */}
      </footer>
   );
}