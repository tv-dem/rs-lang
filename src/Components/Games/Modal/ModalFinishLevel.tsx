import React from "react";
import { Modal, Space } from "antd";
import './ModalFinishLevel.scss';
import {CustomerServiceOutlined} from "@ant-design/icons";


const { confirm } = Modal;

type propsModalFinishLevel={
  right:Array<Object>,
  wrong:Array<Object>,
  onOk:Function,
  onCancel:Function,
  bestLine:number,
}

const ModalFinishLevel: React.FC<propsModalFinishLevel> = ({right, wrong,onOk,onCancel, bestLine}) => {
  let rightPercent: any;
  let wrongPercent: any;
  if (!right.length && !wrong.length) {
    wrongPercent = 0;
    rightPercent = 0;
  } else {
    rightPercent = Math.round(100*right.length/(right.length+wrong.length));
    wrongPercent = 100-rightPercent;
  }

  return (
    <Space>
      {confirm({
        title: `  ${right.length}/${right.length+wrong.length}`,
        content: (
          <div className="modal">

            <div className="modal__answer answer-right">
              <div className="answer-right__title">Right :</div>
              <div className="answer-right__words">
                {right.map((word: any) => 
                  <p key={word.id} className="answer-right__words_word">
                    <span className="word-word"> {word.word}</span>
                    <span className="word-transcription">                     
                      {word.transcription}
                    </span>
                    <span className="word-wordTranslate">                     
                      {word.wordTranslate}
                    </span>
<div className="word-audio">
<CustomerServiceOutlined onClick={()=>{
                new Audio(
                  `https://api-rs-lang.herokuapp.com/${word.audio}`,
                ).play();
            }}/>
</div>

                  </p>
                )}
              </div>
            </div>
            <div className="modal__answer answer-wrong">
              <div className="answer-wrong__title">Wrong :</div>
              <div className="answer-wrong__words">
                {wrong.map((word: any) => 
                  <p key={word.id} className="answer-wrong__words_word">
                    <span className="word-word"> {word.word}</span>
                    <span className="word-transcription">
                      {word.transcription}
                    </span>
                    <span className="word-wordTranslate">
                      {word.wordTranslate}
                    </span>
                    <div className="word-audio">
                    <CustomerServiceOutlined onClick={()=>{
                new Audio(
                  `https://api-rs-lang.herokuapp.com/${word.audio}`,
                ).play();
            }}/>
                    </div>
                  </p>
                )}
              </div>
            </div>
<div className="diagramWrapper">
<div className="bestBoxLineModal">
<div className="bestLineModal">
  {bestLine}
</div>
<div className="bestBoxLineModal_title">
Best Line
</div>
</div>
<div className="diagramBox">
<div className="diagramRight" style = {{height:`${rightPercent}%`}}>
<div className="diagramText">
{rightPercent}%
</div>
</div>
<div className="diagramWrong" style = {{height:`${wrongPercent}%`}}>
<div className="diagramText">
{wrongPercent}%
</div>
  </div>
    </div>
    </div>
          </div>
        ),
        okText: `Следующая страница`,
        cancelText: `Попробовать еще`,
        onOk() {onOk()},
        onCancel() {onCancel()},
        width: "70%",
      })}

    </Space>
  );
};
export default ModalFinishLevel;
