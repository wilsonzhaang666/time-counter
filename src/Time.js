import React, { useState, useEffect } from "react";

const Time = () => {
  const [time, setTime] = React.useState(0);
  const endtime = new Date();
  endtime.setHours(17, 30, 0);
  console.log(endtime);
  const date = new Date();
  const hour = endtime.getHours() - date.getHours();
  const minute = endtime.getMinutes() - date.getMinutes();
  const second = 60 - date.getSeconds();
  React.useEffect(() => {
    const timer = window.setInterval(() => {
      setTime((second) => second + 1);
    }, 1000);
    return () => {
      window.clearInterval(timer);
    };
  }, []);
  return (
    <>
      {hour}:{minute}:{second}
    </>
  );
};

export default Time;
