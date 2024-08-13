import React, { useState, useEffect } from "react";

const TimerComponent = ({ initialTime }) => {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const TimeFormat = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;

    const formattedTime = `${ZeroAdd(hours)}:${ZeroAdd(minutes)}:${ZeroAdd(
      seconds
    )}`;
    return formattedTime;
  };

  const ZeroAdd = (num) => {
    return (num < 10 ? "0" : "") + num;
  };

  return (
    <div>
      <p
        className="display-6 d-flex justify-content-center"
        style={{ fontSize: "24px" }}
      >
        {TimeFormat(timeLeft)}
      </p>
    </div>
  );
};

export default TimerComponent;
