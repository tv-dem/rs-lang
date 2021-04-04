import React, { useEffect } from "react";
import { Progress } from "antd";
import "./ProgressBox.scss";

const ProgressBox = ({
  seconds,
  isCheck,
  onCheck,
  percent,
  setPercent
}) => {

  useEffect(() => {
    if (!isCheck) {
      if (percent > 1) {
        let timer = setInterval(() => progress(), 1000);
        return () => clearInterval(timer);
      } else onCheck([]);
    }
  }, [percent]);

  const progress = () => {
    setPercent(percent - 100 / seconds);
  };

  return (
    <div className="context-progress_bar">
      <Progress
        className="context-progress_bar-cirle"
        type="circle"        
        percent={percent}
        format={(percent) =>
          percent > 1
            ? `${Math.ceil(percent / 100 * seconds)} seconds`
            : `Lose`
        }
        strokeColor="#FFFF40"
        trailColor="#503696"
        strokeWidth="10"
        width="60"
        gapPosition="top"
      ></Progress>
    </div>
  );
};

export default ProgressBox;
