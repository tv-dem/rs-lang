import React, { useEffect } from "react";
import { Progress } from "antd";
import "./ProgressBox.scss";

type ProgressBoxProps={
  seconds:number,
  isCheck:boolean,
  onCheck:Function,
  percent:number,
  setPercent:Function
}

const ProgressBox:React.FC<ProgressBoxProps> = ({
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
         format={(percent) =>{
            if( Number(percent) > 1) return `${Math.ceil(Number(percent) / 100 * seconds)} seconds`
             return `Lose`
           }}
         strokeColor="#FFFF40"
         trailColor="#503696"
         strokeWidth={Number(10)}
         strokeLinecap ="round"
         width={Number(120)}
         gapPosition="top"
      ></Progress>
    </div>
  );
};

export default ProgressBox;
