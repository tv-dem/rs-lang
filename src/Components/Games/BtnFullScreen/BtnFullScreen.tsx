import React from "react";
import fullScreen from "../../../utils/fullScreen";

const BtnFullScreen: React.FC = () => {

  return (
    <div className="fullScreenBtn btn" onClick={() => fullScreen()}></div>
  )
}

export default BtnFullScreen;
