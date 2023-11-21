import { useState, useEffect } from 'react';

const TimerComponent = ({ startProp }: any) => {
  const [startDate, setStartDate] = useState(new Date(startProp));
  const [endDate, setEndDate] = useState<Date | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    const sixMonthsAgo = new Date(startDate);
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() + 6);
    setEndDate(sixMonthsAgo);
  }, [startDate]);

  useEffect(() => {
    const updateRemainingTime = () => {
      const currentDate = new Date();
      if (endDate) {
        const timeDifference = endDate.getTime() - currentDate.getTime();
        const secondsLeft = Math.max(0, Math.floor(timeDifference / 1000));

        if (secondsLeft === 0) {
          clearInterval(interval);
          setTimeLeft(0);
        } else {
          setTimeLeft(secondsLeft);
        }
      }
    };
    const interval = setInterval(updateRemainingTime, 1000);
    updateRemainingTime();
    return () => {
      clearInterval(interval);
    };
  }, [endDate]);

  const formatTime = (seconds: number): string => {
    const days = Math.floor(seconds / 86400);
    seconds -= days * 86400;
    const hours = Math.floor(seconds / 3600);
    seconds -= hours * 3600;
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;

    return `D:${String(days).padStart(2, '0')} H:${String(hours).padStart(2, '0')} M:${String(minutes).padStart(2, '0')} S:${String(remainingSeconds).padStart(2, '0')}`;
  };
  return (
    <div>
      <p style={{ fontSize: "12px", color: "#bababa" }}>Start Date: {startDate.toDateString()}</p>
      {endDate && <p style={{ fontSize: "12px", color: "#bababa" }}>End Date: {endDate.toDateString()}</p>}
      {timeLeft !== null && (
        <div style={{ fontSize: "14px", marginTop: "10px" }}>Time Left: <p style={{ color: "#3498db" }}>{formatTime(timeLeft)}</p></div>
      )}
    </div>
  );
};

export default TimerComponent;
