/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */

import { nanoid } from "nanoid";
import { useEffect, useState } from "react";
import { calculateRemainingTime } from "./calculateRemainingTime";

// prettier-ignore
const defaultTime = {
  days: "13", hours: "23", minutes: "59", seconds: "59",
};

export const TimersCenter = () => {
  const [countDown, setCountDown] = useState(defaultTime);

  useEffect(() => {
    // calculateRemainingTime(setCountDown);

    const interval = setInterval(() => {
      calculateRemainingTime(setCountDown);
    }, 1000);

    // cleanup function
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="timers-section">
      <h2>We're launching soon</h2>
      <div className="timers-ctn">
        {Object.entries(countDown).map(([title, value]) => (
          <Timer key={nanoid()} title={title} value={value} />
        ))}
      </div>
    </section>
  );
};

const Timer = ({ title, value }) => {
  //   const formatTime = (time) => (time < 10 ? `0${time}` : time);

  return (
    <div className="timer">
      {/* <p className="timer-value">{formatTime(value)}</p> */}
      <div className="timer-count">
        <div className="top"></div>
        <p className="time">{value < 10 ? `0${value}` : value}</p>
        <div className="bottom"></div>
      </div>
      <h3 className={`${title} timer-title`}>{title}</h3>
    </div>
  );
};
