

import React, { useState, useEffect, useCallback } from 'react';
import { EVENT_DATE } from '../../core/constants';

const Countdown: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  const calculateTimeLeft = useCallback(() => {
    const difference = +EVENT_DATE - +new Date();
    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, [calculateTimeLeft]);

  const TimerUnit = ({ value, label, color }: { value: number; label: string; color: string }) => (
    <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 min-w-[100px] sm:min-w-[120px]">
      <span className={`text-4xl sm:text-5xl font-display font-black ${color}`}>{value.toString().padStart(2, '0')}</span>
      <span className="text-[10px] sm:text-xs uppercase tracking-[0.2em] font-bold mt-1 text-white/50">{label}</span>
    </div>
  );

  return (
    <div className="flex flex-wrap justify-center gap-4 mt-12">
      <TimerUnit value={timeLeft.days} label="Dias" color="text-oxe-accent" />
      <TimerUnit value={timeLeft.hours} label="Horas" color="text-oxe-yellow" />
      <TimerUnit value={timeLeft.minutes} label="Minutos" color="text-oxe-accent" />
      <TimerUnit value={timeLeft.seconds} label="Segundos" color="text-oxe-primary" />
    </div>
  );
};

export default Countdown;
