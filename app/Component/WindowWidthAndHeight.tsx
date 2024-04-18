'use client'
import { useEffect, useState } from 'react';

const useWindowWidthAndHeight = () => {
   const [Width, setWidth] = useState('0000')
   const [Height, setHeight] = useState('0000')

   const handleWindowResize = () => {
      setWidth(String(window.innerWidth < 1000 ? '0' + window.innerWidth : window.innerWidth));
      setHeight(String(window.innerHeight));
   }

   useEffect(() => {
      // component is mounted and window is available
      handleWindowResize();
      window.addEventListener('resize', handleWindowResize);
      // unsubscribe from the event on component unmount
      return () => window.removeEventListener('resize', handleWindowResize);
   }, []);
   return { Width, Height }
   // Use -->  
   // const { Width, Height } = useWindowWidthAndHeight();
}
export default useWindowWidthAndHeight;