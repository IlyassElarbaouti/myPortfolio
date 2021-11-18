import React, { useEffect } from 'react'
import './cursor.css'
const Cursor = () => {
    const cursorRef = React.useRef(null);
    useEffect(()=>{
        document.addEventListener('mousemove',(event)=>{
            const {pageX , pageY} = event;
            const mouseX = pageX - cursorRef.current.clientWidth/2;
            const mouseY = pageY - cursorRef.current.clientHeight/2;
            cursorRef.current.style.transform = `translate3d(${mouseX +5}px, ${mouseY-10}px,0)`;
            cursorRef.current.style.visibility ='visible';
         });
},[])
      return (
        <div className='cursor' ref={cursorRef}>
            
        </div>
    )
    }
export default Cursor
