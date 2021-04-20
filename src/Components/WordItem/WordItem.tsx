import React, { useState } from 'react';
import { Popover } from 'antd';
import './WordItem.scss';
import { CustomerServiceOutlined } from "@ant-design/icons";
import { connect } from "react-redux";

const WordItem = ({ word, modificator, option, translate, audio, audioMeaning, audioExample, textMeaning, textExample, image, transcription, textExampleTranslate, textMeaningTranslate, wordTranslate, options, key }: any) => {
  const [audios] = useState([
    new Audio('https://api-rs-lang.herokuapp.com/' + audio),
    new Audio('https://api-rs-lang.herokuapp.com/' + audioMeaning),
    new Audio('https://api-rs-lang.herokuapp.com/' + audioExample),
  ])
  return (
    <div className={`word-item ${modificator}`} key={key}>
      <div className="word-item__info">
        <img
          src={'https://api-rs-lang.herokuapp.com/' + image}
          alt='...'
        />
        <CustomerServiceOutlined onClick={() => {
          audios[0].play();
          audios[0].addEventListener('ended', () => audios[1].play());
          audios[1].addEventListener('ended', () => audios[2].play());
        }} />
        <Popover
          content={() => <div>
            <p dangerouslySetInnerHTML={{ __html: textMeaning }} />
            {
              // @ts-ignore
              translate && <p>{textMeaningTranslate}</p>
            }
            <br />
            <p dangerouslySetInnerHTML={{ __html: textExample }} />
            {translate && <p>{textExampleTranslate}</p>}
          </div>}
          title={`${word} - ${transcription}`}>
          <div className="words">
            <span>{word} - {transcription}</span>
            {translate && <span>{wordTranslate}</span>}
          </div>
        </Popover>
      </div>
      {option && options && <div className="word-item__setting">
        {options.map(({ title, onClick }: any) => <span key={title} onClick={onClick}>{title}</span>)}
      </div>}
    </div>
  );
}

const mapStateToProps = ({ auth }: any) => ({
  option: auth.userSettings.options,
  translate: auth.userSettings.translate,
})

export default connect(mapStateToProps)(WordItem);
