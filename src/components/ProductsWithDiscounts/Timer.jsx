import React, { useEffect, useState } from "react";

const Timer = () => {

  const initialTime = 60 * 24 * 60 * 60; 
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);


  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = Math.floor(timeLeft % 60);

  return (
    <div className="flex gap-4 text-2xl font-bold">
      <span className="timer-style" >{String(days)} Days</span>
      <span className="timer-style">{String(hours)} Hour</span>
      <span className="timer-style">{String(minutes)} Min</span>
      <span className="timer-style">{String(seconds)} Sec</span>
    </div>
  );
};

export default Timer;
