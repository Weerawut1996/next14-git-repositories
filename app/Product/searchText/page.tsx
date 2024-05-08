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
      <input className="block text-[#000] mt-0 mb-1 mx-auto w-[250px] px-2 py-1 text-[14px]/[20px]" type="search" value={inputValue}
         onChange={(event) => {
            setInputValue(event.target.value);
            setlowcaseInput(event.target.value.toLowerCase());
         }}
      />
      <table id="myTable" className="w-8/12 mx-auto my-auto table-fixed">
         <thead>
            <tr className="divide-x divide-slate-600 border-b border-slate-600">
               <th className="">ID</th>
               <th className="">Personel ID</th>
               <th className="">Name</th>
               <th className="">Card Id</th>
               <th className="">Birt Date</th>
               <th className="">Telephone</th>
            </tr>
         </thead>
         <tbody>
            {dataRow.filter(row => Object.values(row).some(value => String(value).toLowerCase().includes(lowcaseInput))).map(row => {
               // console.log(row);
               // console.log(new Date().toLocaleTimeString());
               return (
                  <tr key={row.ID} className={`divide-x divide-slate-600 ${row.ID % 2 != 0?'bg-[#111]':''}`}>
                     <td className="text-center">{row.ID}</td>
                     <td className="pl-[2%]">{row.person_id}</td>
                     <td className="pl-[2%]">{row.Name}</td>
                     <td className="pl-[2%]">{row.card_id}</td>
                     <td className="text-center">{row.b_date}</td>
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