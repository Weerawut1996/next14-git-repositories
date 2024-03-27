"use client"

import { useEffect, useState } from "react";

export default function DayAndTimer() {
   const day = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
   const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
   const [time_now, settime_now] = useState("00:00:00");

   useEffect(() => {
      const interval = setInterval(() => {
         const currentTime = new Date().toLocaleTimeString();
         settime_now(currentTime);
      }, 1000);
      // Clear interval on unmount
      return () => clearInterval(interval);
   }, []);

   return { Day: day[new Date().getDay()], Month: month[new Date().getMonth()], Time: time_now }
}