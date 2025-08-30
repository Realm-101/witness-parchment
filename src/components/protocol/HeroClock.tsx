"use client";

import { useState, useEffect } from "react";

const HeroClock = () => {
  const [time, setTime] = useState({ hours: 23, minutes: 58, seconds: 0 });
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      setIsPaused(true);
      return;
    }

    const interval = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        
        seconds += 1;
        
        if (seconds >= 60) {
          seconds = 0;
          minutes += 1;
          
          if (minutes >= 60) {
            minutes = 0;
            hours += 1;
            
            // Reset to 23:58:00 when reaching 24:00:00
            if (hours >= 24) {
              return { hours: 23, minutes: 58, seconds: 0 };
            }
          }
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const formatTime = (value: number) => value.toString().padStart(2, '0');

  return (
    <div className="flex items-center justify-center">
      <div className={`clock-display ${isPaused ? '' : 'motion-safe-animate'}`}>
        <div className="flex items-center justify-center">
          <span className="tabular-nums">
            {formatTime(time.hours)}:{formatTime(time.minutes)}:{formatTime(time.seconds)}
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroClock;