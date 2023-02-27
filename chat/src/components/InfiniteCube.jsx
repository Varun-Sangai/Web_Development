import React, { useState, useEffect } from "react";

const Cube = ({ onJoin, onSplit, joined }) => {
  return (
    <div className={`cube ${joined ? "joined" : "split"}`}>
      <div className="cube-face top" />
      <div className="cube-face bottom" />
      <div className="cube-face front" />
      <div className="cube-face back" />
      <div className="cube-face left" />
      <div className="cube-face right" />
    </div>
  );
};

const InfiniteCube = () => {
  const [joined, setJoined] = useState(true);

  useEffect(() => {
    let intervalId;
    if (joined) {
      intervalId = setInterval(() => {
        setJoined(false);
        setTimeout(() => {
          setJoined(true);
        }, 2000);
      }, 1000);
    } else {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [joined]);

  return (
    <div className="container">
      <Cube joined={joined} />
    </div>
  );
};

export default InfiniteCube;
