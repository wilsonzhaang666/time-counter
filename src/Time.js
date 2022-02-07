import React, { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = React.useState(0);
  const [currentTime, setCurrentTime] = React.useState(0);
  const [minutes, setMinute] = React.useState(0);
  const endtime = new Date();
  endtime.setHours(17, 30, 0);
  console.log(endtime);
  const date = new Date();

  const hour = endtime.getHours() - date.getHours() - 1;

  const minute = endtime.getMinutes() - date.getMinutes() + 60;

  const second = 60 - date.getSeconds();
  const CurrentHour = date.getHours();
  const CurrentMinute = date.getMinutes();
  const CurrentSecond = date.getSeconds();
  useEffect(() => {
    if (minute > 60) {
      setMinute(minute - 60);
    } else {
      setMinute(minute);
    }
  });
  console.log(minutes);
  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setTime((second) => second + 1);
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);
  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setCurrentTime((CurrentSecond) => CurrentSecond + 1);
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);
  return (
    <>
      <div className="CurrentTime">
        Current time
        <div className="timeDeatil">
          {CurrentHour}:{CurrentMinute}:{CurrentSecond}
        </div>
      </div>

      <div className="container">
        <div>
          {hour}:{minutes}:{second}
        </div>
      </div>
    </>
  );
};

export default Time;
