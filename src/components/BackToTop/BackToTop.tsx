import { useState } from 'react';
import './backToTop.css';
import { IoIosArrowUp } from "react-icons/io";


const BackToTop = () => {
    const [toTop, setToTop] = useState(false);

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 700){
          setToTop(true)
        } 
        else if (scrolled <= 900){
          setToTop(false)
        }
    };
    
    const scrollToTop = () =>{
        window.scrollTo({
            top: 0, 
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleVisible);

  return (
    <div>
        <button 
            className='btn-btt'
            onClick={scrollToTop} 
            style={{display: toTop ? 'inline' : 'none'}}
        >
            <span className='btt-txt'>Ir Arriba</span>
            <span className='btt-icon'><IoIosArrowUp/></span>
        </button>
    </div>
  )
}

export default BackToTop