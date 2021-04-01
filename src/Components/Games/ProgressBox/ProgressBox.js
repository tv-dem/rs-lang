import React, { useEffect, useState } from "react";
import { Progress } from "antd";
import "./ProgressBox.scss";

const ProgressBox = ({
  seconds,
  isCheck,
  onCheck,
}) => {

  const [percent, setPercent] = useState(100)

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
        strokeColor
        percent={percent}
        format={(percent) =>
          percent > 1
            ? `${Math.ceil(percent / 100 * seconds)} seconds`
            : `Lose`
        }
        strokeColor="#2A9C50"
        trailColor="red"
        strokeWidth="9"
        width="60"
        gapPosition="top"
      ></Progress>
    </div>
  );
};

export default ProgressBox;
