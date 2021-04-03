import React from "react";
import { Modal, Space } from "antd";
import './ModalFinishLevel.scss'

const { confirm } = Modal;

const ModalFinishLevel: React.FC<any> = (right, wrong) => {



  return (
    <Space>
      {Modal.confirm({
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
                  </p>
                )}
              </div>
            </div>
          </div>
        ),
        okText: `Следующая страница`,
        cancelText: `На главное меню`,
        onOk() {},
        onCancel() {},
        width: "70%",
      })}
    </Space>
  );
};
export default ModalFinishLevel;
