"use client"
import { useEffect, useState } from "react";

export default function FooterComponent() {
   const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']   
   const year = new Date().getFullYear();
   const [time_now, settime_now] = useState("00:00:00");

   useEffect(() => {
      const interval = setInterval(() => {
         const currentTime = new Date().toLocaleTimeString();
         settime_now(currentTime);
      }, 1000);
      // Clear interval on unmount
      return () => clearInterval(interval);
   }, []);

   return (
      <footer>
         <p className="text-center">{day[new Date().getDay()]} footer  &#169; 2024 - {year} {time_now}</p>
      </footer>
      
   );
}