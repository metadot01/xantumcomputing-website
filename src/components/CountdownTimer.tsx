import { useState, useEffect, memo } from "react";

interface CountdownTimerProps {
  targetDate: Date;
  className?: string;
}

interface TimeLeft {
  days: number;
  hours: number;
  mins: number;
  secs: number;
}

const CountdownTimer = memo(({ targetDate, className = "" }: CountdownTimerProps) => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({ days: 0, hours: 0, mins: 0, secs: 0 });

  useEffect(() => {
    const calculateTimeLeft = (): TimeLeft => {
      const difference = targetDate.getTime() - new Date().getTime();
      
      if (difference <= 0) {
        return { days: 0, hours: 0, mins: 0, secs: 0 };
      }

      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    };

    setTimeLeft(calculateTimeLeft());

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  const timeUnits = [
    { value: timeLeft.days, label: "Days" },
    { value: timeLeft.hours, label: "Hours" },
    { value: timeLeft.mins, label: "Mins" },
    { value: timeLeft.secs, label: "Secs" },
  ];

  return (
    <div className={`flex items-center justify-center gap-2 ${className}`}>
      {timeUnits.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-2">
          <div className="flex flex-col items-center">
            <span className="text-lg font-bold text-white tabular-nums min-w-[28px] text-center">
              {unit.value.toString().padStart(2, '0')}
            </span>
            <span className="text-[8px] text-white/60 uppercase tracking-wider">
              {unit.label}
            </span>
          </div>
          {index < timeUnits.length - 1 && (
            <span className="text-white/30 text-sm font-light self-start mt-1">:</span>
          )}
        </div>
      ))}
    </div>
  );
});

CountdownTimer.displayName = "CountdownTimer";

export default CountdownTimer;