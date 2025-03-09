'use client';

import React, { useState, useEffect, forwardRef, useImperativeHandle, useCallback } from "react";
import { Suspense } from "react";

const QuizTimer = forwardRef(({ textColor = 'white' }, ref) => {
  const [time, setTime] = useState(0);
  const [displayTime, setDisplayTime] = useState("00:00");
  
  // Format time function - memoized to avoid recreation on each render
  const formatTime = useCallback((seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  }, []);
  
  // Regular time increment (1 second interval)
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(prevTime => {
        const newTime = prevTime + 1;
        // Update display time every 5 seconds or when minutes change
        if (newTime % 5 === 0 || Math.floor(newTime / 60) > Math.floor(prevTime / 60)) {
          setDisplayTime(formatTime(newTime));
        }
        return newTime;
      });
    }, 1000);
    
    return () => clearInterval(timer);
  }, [formatTime]);
  
  // Initial display time setup
  useEffect(() => {
    setDisplayTime(formatTime(time));
  }, [formatTime]);
  
  // Used to get time from the parent component
  useImperativeHandle(ref, () => ({
    getTime: () => time
  }));
  
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <span className={`text-${textColor} text-2xl font-semibold`}>
        Time: {displayTime}
      </span>
    </Suspense>
  );
});

QuizTimer.displayName = 'QuizTimer';

export default QuizTimer;