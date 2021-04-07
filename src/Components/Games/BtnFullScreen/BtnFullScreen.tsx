import React from "react";
import { Button } from "antd";
import fullScreen from "../../../utils/fullScreen";

const BtnFullScreen: React.FC = () => {

  return (
    <Button className="fullScreenBtn" type="primary" aria-hidden="true" onClick={() => fullScreen()}>full</Button>
  )
}

export default BtnFullScreen;
