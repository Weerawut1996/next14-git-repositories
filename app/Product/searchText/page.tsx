'use client'
import { useState } from "react";
import dataRow from '@/app/Product/SearchText/dataRow'


export default function SearchTable() {
   const [inputValue, setInputValue] = useState('');
   const [lowcaseInput, setlowcaseInput] = useState('');

   const handleKeyUp = (event: any) => {
      console.log(event)
      console.log('Key pressed:', event.key);
      // ดำเนินการอื่น ๆ ตามต้องการ
   };



   return (<>
      <h1 className="text-4xl font-bold text-center">SearchTable</h1>
      <p className="my-2 text-center">{inputValue == '' ? <span className="text-transparent">0</span> : inputValue}</p>
      <table id="myTable" className="w-10/12 mx-auto my-auto">
         <thead>
            <tr className="mb-2">
               <th colSpan={6} className="pb-2">
                  <input className="text-[#000]  max-w-[250px] px-2 py-1 text-[14px]/[20px]" type="search" value={inputValue}
                     onChange={(event) => {                       
                        setInputValue(event.target.value);
                        setlowcaseInput(event.target.value.toLowerCase());
                     }}
                  />
               </th>
            </tr>
            <tr className="divide-x divide-slate-600">
               <th className="max-w-[24px]">ID</th>
               <th className="max-w-[116px]">Personel ID</th>
               <th className="max-w-[204px]">Name</th>
               <th className="max-w-[116px]">Card Id</th>
               <th className="max-w-[116px]">Birt Date</th>
               <th className="max-w-[116px]">Telephone</th>
            </tr>
         </thead>
         <tbody>
            {dataRow.filter(row => Object.values(row).some(value => String(value).toLowerCase().includes(lowcaseInput))).map(row => {
               // console.log(row);
               // console.log(new Date().toLocaleTimeString());
               return (
                  <tr key={row.ID} className="divide-x divide-slate-600">
                     <td className="text-center">{row.ID}</td>
                     <td className="pl-[2%]">{row.person_id}</td>
                     <td className="pl-[2%]">{row.Name}</td>
                     <td className="pl-[2%]">{row.card_id}</td>
                     <td className="pl-[2%]">{row.b_date}</td>
                     <td className="pl-[2%]">{row.telephone}</td>
                  </tr>
               )
            })
            }
            {dataRow.filter(row => Object.values(row).some(value => String(value).toLowerCase().includes(lowcaseInput))).length === 0 && (
               <tr>
                  <td colSpan={6}>no data</td>
               </tr>
            )}
         </tbody>
      </table>
   </>
   );
}