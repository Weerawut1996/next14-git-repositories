'use client'
import Link from "next/link";

export default function ProductNacbar() {
   return (
      <div className="w-[80%] bg-[#5a5a5a] px-2 py-1">
         <Link className="block" href={'/Product'}>back</Link>
         <Link className="block" href={'/Product/SearchText'}>SearchText</Link>
         <Link className="block" href={'/Product/LiquidCalculation'}>Liquid Calculation</Link>
         <Link className="block" href={'/Product/Lottery'}>Lottery</Link>         
      </div>
   );
}