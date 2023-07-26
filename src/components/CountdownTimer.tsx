"use client"
import { useState, useEffect, useContext } from 'react';
import TimerContext from './BottomBarState';

interface CountdownTimerProps {
  targetTime: number;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetTime }) => {
  const warmAfter = 10
  const [timeLeft, setTimeLeft] = useState<number>(targetTime);
  
  useEffect(() => {
    const interval = setInterval(() => {
      const difference = timeLeft - 1

      if (difference <= 0) {
        clearInterval(interval);
        setTimeLeft(0);
      } else {
        setTimeLeft(difference);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        { timeLeft < warmAfter ? 
          <div className= "w-16 h-16 flex justify-center items-center rounded-full text-center ring-4 ring-red-500">
            <span className="text-3xl text-red-500">{timeLeft}</span>
          </div>: 
          <div className= "w-16 h-16 flex justify-center items-center rounded-full text-center ring-4 ring-blue-500">
            <span className="text-3xl text-blue-500">{timeLeft}</span>
          </div>
        }
      </div>
    </div>
  );
};

export default CountdownTimer;
