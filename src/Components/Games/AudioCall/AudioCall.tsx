import React, { useEffect, useRef, useCallback } from 'react';
import { Spin } from 'antd';
import { SoundTwoTone } from '@ant-design/icons';
import './AudioCall.scss';
import Words from "./Words/Words"
import ModalFinishLevel from '../Modal/ModalFinishLevel';
import rightAudio from '../../../assets/audio/right_answer.mp3';
import wrongAudio from '../../../assets/audio/wrong-answer.mp3';

const AudioCall: React.FC = ({
  words,
  count,
  right,
  wrong,
  setCount,
  currentWord,
  setCurrentWord,
  addRightWord,
  addWrongWord,
  pending,
  fetchWords,
  level,
  page,
  isCheck,
  setIsCheck,
}: any) => {
  const audioCallRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const selectedRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (words) setCurrentWord(words[count]);
  }, [words]);

  useEffect(() => {
    if (count) {
      setCurrentWord(words[count]);
    }
  }, [count]);

  useEffect(() => {
    playAudio();
  }, [currentWord]);

  const playAudio = useCallback(() => {
    if (currentWord)
      new Audio(
        `https://api-rs-lang.herokuapp.com/${currentWord.audio}`,
      ).play();
  }, [currentWord]);

  useEffect(() => {
    if (isCheck) {
      if (btnRef.current && selectedRef.current) {
      
      }
    } else {
      if (btnRef.current && selectedRef.current) {
       
      }
    }
  }, [isCheck]);

  const toWin = () => {
    new Audio(rightAudio).play();
    addRightWord(currentWord);
  };

  const toLost = () => {
 //   if(btnRef.current) {
//       console.log(btnRef.current.childNodes)
//       btnRef.current.childNodes.forEach((el:any)=>{
// el.className.add("audioCall_no-active")
      // })
      // for (const key in btnRef.current.childNodes ) {
      //  btnRef.current.childNodes[key].classList.add("audioCall_no-active")
      //   // btnRef.current.children[key].classList.add("audioCall_no-active")
      //   // if(btnRef.current.children[key].innerHTML===currentWord.wordTranslate) btnRef.current.children[key].classList.add("audioCall_is-selected")
      // }
  //  btnRef.current.children.forEach((btn:HTMLDivElement)=>{
     
      
  //   })
//  }
    new Audio(wrongAudio).play();
    addWrongWord(currentWord);
  };

  const onCheck = (word: any) => {
    if (word.word === currentWord.word) {      
      toWin();
    } else {
      toLost();
    }
    setIsCheck(true);
  };

  const onOk = () => {
    fetchWords(level, page + 1);
  };

  const onCancel = () => {
    fetchWords(level, page);
  };

const effectCarusel=()=>{
  if (audioCallRef.current) {
    audioCallRef.current.classList.remove('audioCall_to-place');
    audioCallRef.current.classList.add('audioCall_to-left');
    setTimeout(() => {
      if (audioCallRef.current) {
        audioCallRef.current.classList.remove('audioCall_to-left');
        audioCallRef.current.classList.add('audioCall_to-right');
      }
    }, 100)
    setTimeout(() => {
      if (audioCallRef.current) {
        audioCallRef.current.classList.remove('audioCall_to-right');
        audioCallRef.current.classList.add('audioCall_to-place');
      }
    }, 500)
  }
}


  const onHandleClickBtnNext = () => {
    
    effectCarusel()    

    setTimeout(() => {
      if (count < words.length - 1) {
        setCount(count + 1);
      } else {
        ModalFinishLevel({ right, wrong, onOk, onCancel });
      }
      setIsCheck(false);
    }, 500)


  };

  const onHandleClickBtnNotKnow = () => {
    onCheck('');
    setIsCheck(true);
  };

  return (
    <div className="audioCall__wrapper ">
      <div ref={audioCallRef} className="audioCall">
        {!pending && currentWord ? (
          <>
            <div className="audioCall__view-box">
              {isCheck ? (
                <>
                  <img
                    className="audioCall__view-box_image"
                    src={`https://api-rs-lang.herokuapp.com/${currentWord.image}`}
                    alt="Loading"
                  ></img>
                  <div className="audioCall__view-box_answer answer">
                    <SoundTwoTone twoToneColor="#d19aed" onClick={playAudio} />
                    <div className="answer__word-word">{currentWord.word}</div>
                  </div>
                </>
              ) : (
                <div
                  className="audioCall__view-box_btn-sound"
                  onClick={playAudio}
                ></div>
              )}
            </div>

              <Words words={words} currentWord={currentWord}  onCheck={onCheck} btnRef={btnRef} />              
            
            <div className="audioCall__next-box">
              {isCheck ? (
                <div
                  className="audioCall__next-box_btn-next"
                  onClick={onHandleClickBtnNext}
                >
                  Далее
                </div>
              ) : (
                <div
                  className="audioCall__next-box_btn-next"
                  onClick={onHandleClickBtnNotKnow}
                >
                  Не знаю
                </div>
              )}
            </div>
          </>
        ) : (
          <Spin tip="Loading..." size="large" />
        )}
      </div>
    </div>
  );
};

export default AudioCall;
