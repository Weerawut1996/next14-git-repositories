'use client'

import { ChangeEvent, useState } from "react";

export default function LiquidCalculation() {
   const [CalName, setCalName] = useState('What you want the Calculation?')

   function SetCalName_UseState(e: ChangeEvent<HTMLSelectElement>) { //<ChangeEvent<HTMLSelectElement> is Type
      setCalName(e.target.value != 'None' ? e.target.value + " Calculater" : 'What you want the Calculation?')

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
         </select >
      </div>

   </>
   );
}