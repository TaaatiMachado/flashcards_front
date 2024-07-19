import { useEffect, useState } from 'react';
import './AnimatedCard.css';

const AnimatedCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsOpen((prev) => !prev);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={`stacked-cards ${isOpen ? 'open' : ''} relative w-52 h-72 mx-auto`}>
      <div className="card w-full h-full absolute bg-white border-[10px] border-light-accent text-white text-xl rounded-[20px] transition-transform duration-1000 ease-in-out rotate-[-5deg]">
        <div className='w-full h-full bg-white border-[10px] border-light-secondary  rounded-[10px]'>
        </div>
      </div>
      <div className="card w-full h-full absolute bg-white border-[10px] border-light-accent text-white text-xl rounded-[20px] transition-transform duration-1000 ease-in-out rotate-[10deg]">
        <div className='w-full h-full bg-white border-[10px] border-light-secondary  rounded-[10px]'>
        </div>
      </div>
      <div className="card w-full h-full absolute bg-white border-[10px] border-light-accent text-white text-xl rounded-[20px] transition-transform duration-1000 ease-in-out rotate-[3deg]">
        <div className='w-full h-full bg-white border-[10px] border-light-secondary  rounded-[10px]'>
          
        </div>
      </div>
    </div>
  );
};

export default AnimatedCard;
