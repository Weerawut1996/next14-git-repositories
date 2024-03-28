'use client'
import { useRouter } from "next/navigation";
import { ChangeEvent, useState } from "react";

export default function LiquidCalculation() {
   const [CalName, setCalName] = useState('What you want the Calculation?')
   const router = useRouter()

   function SetCalName_UseState(e: ChangeEvent<HTMLSelectElement>) {
      const TargetValue = e.target.value
      setCalName(TargetValue != 'None' ? TargetValue + " Calculater" : 'What you want the Calculation?')
      router.push('/Product/Calculater?v='+TargetValue)
      // change url function

   }
   return (<>
      <h1 className="mb-1 text-4xl font-bold text-center">{CalName}</h1>
      <div className="relative mx-auto w-[200px]">
         < select
            onChange={event => SetCalName_UseState(event)}
            className="text-[#000] w-full">
            <option value='None'>None</option>
            <option value='Percentage'>Percent</option>
            <option value='Liquid'>Liquid</option>
            <option value='Game&#32;Enegy'>Game Enegy</option>            
            <option value='Time'>Time</option>
         </select >
      </div>

   </>
   );
}