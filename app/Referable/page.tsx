
export default function Referable() {
   const aLink = {
      copy_this: "https://spotlight.tailwindui.com/projects",
      tailwind: 'https://tailwindcss.com/docs/installation',
      animatedUI: 'http://dribbble.com/shots/3829288-Daily-UI-007-Settings-Animated/attachments/3829288?mode=media',

   }
   return (
      <>
         <h1 className="text-4xl font-bold text-center">อ้างอิง</h1>
         <div className="flex justify-center">
            <div className="flex flex-col">
               <p className="hover:bg-gray-800"><a href={aLink.copy_this} target="_blank" rel="noopener noreferrer">Link -- Copythis</a></p>
               <p className="hover:bg-gray-800"><a href={aLink.tailwind} target="_blank" rel="noopener noreferrer">Link -- Tailwind</a></p>
               <p className="hover:bg-gray-800">
                  <a className=" flex flex-col" href={aLink.animatedUI} target="_blank" rel="noopener noreferrer">
                     <span>Link -- Animated ui</span>
                     <span>Z-index : 3;  ...Icon</span>
                     <span>Z-index : 2;  ...white box</span>
                     <span>Z-index : 1;  ...red tab</span>
                  </a>
               </p>
            </div>
         </div>
         </>


   );
}
