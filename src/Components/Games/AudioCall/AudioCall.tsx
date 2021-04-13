import React, { useEffect, useRef, useCallback } from 'react';
import { Spin } from 'antd';
import { SoundTwoTone } from '@ant-design/icons';
import './AudioCall.scss';
import Words from '../Words/Words';
import ModalFinishLevel from '../Modal/ModalFinishLevel';
import rightAudio from '../../../assets/audio/right_answer.mp3';
import wrongAudio from '../../../assets/audio/wrong-answer.mp3';
import BestLineContainer from '../BestLine/BestLineContainer';
import BtnFullScreen from '../BtnFullScreen/BtnFullScreen';

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
  bestLine,
  currentLine,
  setCurrentLine,
}: any) => {
  const audioCallRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);

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
    if (!isCheck) {
      if (btnRef.current) {
        btnRef.current.childNodes.forEach((el: any) => {
          el.classList.remove('audioCall_no-active');
          el.classList.remove('audioCall_is-selected-win');
          el.classList.remove('audioCall_is-selected-lose');
        });
      }
    }
  }, [isCheck]);

  const toWin = () => {
    setCurrentLine(currentLine+1);
    if (btnRef.current) {
      btnRef.current.childNodes.forEach((el: any) => {
        el.classList.add('audioCall_no-active');
        if (el.firstChild.innerHTML === currentWord.wordTranslate)
          el.classList.add('audioCall_is-selected-win');
      });
    }

    new Audio(rightAudio).play();
    addRightWord(currentWord);
  };

  const toLost = () => {
    setCurrentLine(0);
    if (btnRef.current) {
      btnRef.current.childNodes.forEach((el: any) => {
        el.classList.add('audioCall_no-active');
        if (el.firstChild.innerHTML === currentWord.wordTranslate)
          el.classList.add('audioCall_is-selected-lose');
      });
    }

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


  
  const effectCarusel = () => {
    if (audioCallRef.current) {
      audioCallRef.current.classList.remove('audioCall_to-place');
      audioCallRef.current.classList.add('audioCall_to-left');
      setTimeout(() => {
        if (audioCallRef.current) {
          audioCallRef.current.classList.remove('audioCall_to-left');
          audioCallRef.current.classList.add('audioCall_to-right');
        }
      }, 100);
      setTimeout(() => {
        if (audioCallRef.current) {
          audioCallRef.current.classList.remove('audioCall_to-right');
          audioCallRef.current.classList.add('audioCall_to-place');
        }
      }, 500);
    }
  };

  const onHandleClickBtnNext = () => {
    effectCarusel();

    setTimeout(() => {
      if (count < words.length - 1) {
        setCount(count + 1);
      } else {
        ModalFinishLevel({ right, wrong, onOk, onCancel, bestLine });
      }
      setIsCheck(false);
    }, 500);
  };

  const onHandleClickBtnNotKnow = () => {
    onCheck('');
    setIsCheck(true);
  };

  return (
    <div className="transition-group">
    <div className="audioCall__wrapper ">
      <div className="boxLineBest">
                  <div className="bestLine">Best line: </div>
                  <div className="boxLineBestImg"></div>
                  <div className="bestLine">x {bestLine}</div>
                  <BtnFullScreen/>
                </div>
              <BestLineContainer />
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

            <Words
              words={words}
              currentWord={currentWord}
              onCheck={onCheck}
              btnRef={btnRef}
              numOfWords={Number(4)}
            />

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
    </div>
  );
};

export default AudioCall;
