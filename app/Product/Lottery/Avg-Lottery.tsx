'use client'
import memorySizeOf from "@/app/Component/MemorySize";
import Lot2024 from "./Lottery2024";
import Lot2023 from "./Lottery2023";

const AvgLottery = () => {
   const duplicates = findDuplicates();

   return (
      <div>
         <h1>Duplicate Numbers</h1>
         <ul>
            {duplicates.map(([num, count], index) => (
               <li key={index}>{`[${num}, ${count}]`}</li>
            ))}
         </ul>
      </div>
   );
}

export default AvgLottery;

//-----------------------------------------------------------
const findDuplicates = () => {
   console.log(Lot2023.length);
   const LotteryData = [...Lot2024,...Lot2023]
   const combinedArray: string[] = LotteryData.flatMap(item => [
      item.prize1st,
      ...item.near_1st,
      ...item.prize2nd,
      ...item.prize3rd,
      ...item.prize4th,
      ...item.prize5th
   ]);
   combinedArray.push('AAA112', 'AAA112', 'BBB680', 'BBB680', 'AAA112', 'CCC201', 'CCC201', 'CCC201')
   combinedArray.sort();
   console.log(memorySizeOf(combinedArray));

   // สร้างตัวแปร object เพื่อเก็บจำนวนที่ซ้ำของแต่ละค่า
   const countMap: { [key: string]: number } = {};

   // วนลูปผ่านอาร์เรย์เพื่อนับจำนวนและบันทึกลงใน countMap
   combinedArray.forEach((item: string) => {
      countMap[item] = (countMap[item] || 0) + 1;
   });

   // สร้างอาร์เรย์ของค่าที่ซ้ำกันพร้อมจำนวนที่ซ้ำ
   const duplicates: [string, number][] = Object.entries(countMap).filter(([key, value]: [string, number]) => value > 1);

   // แสดงผลลัพธ์
   console.log(duplicates);
   return [];
};
//-----------------------------------------------------------