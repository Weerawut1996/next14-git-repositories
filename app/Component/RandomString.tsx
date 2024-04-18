"use client"
import { useEffect, useState } from "react";

function MakeId(length: number) {
   const [ResultString, setResultString] = useState('')

   function SetString() {
      let result = '';
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
      const charactersLength = characters.length;
      let counter = 0;
      while (counter < length) {
         result += characters.charAt(Math.floor(Math.random() * charactersLength));
         counter += 1;
      }
      setResultString(result)
   }

   useEffect(() => {
      const interval = setInterval(() => {
         SetString()
      }, 5000); // 5sec
      // Clear interval on unmount
      return () => clearInterval(interval);
   }, []);

   return ResultString;

}

export default MakeId;
// console.log(MakeId(5));