import { FC, useEffect, useState } from 'react';

export type TimerProps = {
  onTimeUp: () => void;
};

export const Timer: FC<TimerProps> = ({ onTimeUp }) => {
  const [time, setTime] = useState<number>(10);
  console.log(`render: ${time}`);

  useEffect(() => {
    console.log('effect executed');
    const intervalId = setInterval(
      () =>
        setTime((prevTime) => {
          if (prevTime <= 0) {
            setTime(10);
            onTimeUp();
            return 0;
          }
          return prevTime - 1;
        }),
      1000
    );

    return () => clearInterval(intervalId);
  }, [onTimeUp]);

  return <div style={{ fontSize: '16px', fontWeight: 'bolder' }}>{time}</div>;
};
