import React, { useEffect, useRef, useCallback } from 'react';
import { Button, Spin } from 'antd';
import { SoundTwoTone } from '@ant-design/icons';
import './AudioCall.scss';
import Words from '../Words/Words';
import ModalFinishLevel from '../Modal/ModalFinishLevel';
import AudioToggleContainer from '../AudioToggle/AudioToggleContainer'
import { audioAnswer } from '../../../utils/audio';
import BestLineContainer from '../BestLine/BestLineContainer';
import BtnFullScreen from '../BtnFullScreen/BtnFullScreen';
import Loading from '../../Loading/Loading';

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
  setPage,
  isSound,
  SetGameStat,
  UpdateGameStat,
  stat
}: any) => {
  const audioCallRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const btnNoKnowRef = useRef<HTMLDivElement>(null);
  const btnNextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    debugger;
    console.log(stat)
    SetGameStat('gameStatAudio', 0, 0, 0)
  }, [])

  useEffect(() => {
    debugger;
    console.log(stat)
    UpdateGameStat('gameStatAudio', bestLine, count, right.length);
  }, [count])

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
    const handleClick = (event: any) => {
      event.preventDefault();
      if (words) {
        if (count < words.length - 1) {
          if (btnNoKnowRef.current) {
            if (event.code === `Space`) btnNoKnowRef.current.click();
          }

          if (btnRef.current) {
            btnRef.current.childNodes.forEach((el: any, index: number) => {
              if (
                event.code === `Digit${index + 1}` ||
                event.code === `Numpad${index + 1}`
              )
                el.lastChild.click();
            });
          }
        }
      }
    };

    document.addEventListener('keydown', handleClick);

    return () => document.removeEventListener('keydown', handleClick);
  }, [currentWord]);

  const playAudio = useCallback(() => {
    if (currentWord)
      new Audio(
        `https://api-rs-lang.herokuapp.com/${currentWord.audio}`,
      ).play();
  }, [currentWord]);


  useEffect(() => {
    let handleClick: EventListener | null = null;
    if (!isCheck) {
      if (btnRef.current) {
        btnRef.current.childNodes.forEach((el: any) => {
          el.classList.remove('audioCall_no-active');
          el.classList.remove('audioCall_is-selected-win');
          el.classList.remove('audioCall_is-selected-lose');
        });
      }
    } else {
      handleClick = (event: any) => {
        event.preventDefault();
        if (words) {
          if (count < words.length - 1) {
            if (btnNextRef.current) {
              if (event.code === `Enter`) btnNextRef.current.click()
            }
          }
        }
      };
    }

    if (handleClick) document.addEventListener('keydown', handleClick);

    return () => {
      if (handleClick) document.removeEventListener('keydown', handleClick);
    };
  }, [isCheck]);


  const toWin = () => {
    setCurrentLine(currentLine + 1);
    if (btnRef.current) {
      btnRef.current.childNodes.forEach((el: any) => {
        el.classList.add('audioCall_no-active');
        if (el.lastChild.innerHTML === currentWord.wordTranslate)
          el.classList.add('audioCall_is-selected-win');
      });
    }
    if (isSound) audioAnswer[0].play();
    addRightWord(currentWord);
  };

  const toLost = () => {
    setCurrentLine(0);
    if (btnRef.current) {
      btnRef.current.childNodes.forEach((el: any) => {
        el.classList.add('audioCall_no-active');
        if (el.lastChild.innerHTML === currentWord.wordTranslate)
          el.classList.add('audioCall_is-selected-lose');
      });
    }

    if (isSound) audioAnswer[1].play();
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
    setPage(page + 1);
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
    <div className="audioCall__wrapper ">
      <div className="boxLineBest">
        <div className="boxLineBestLine">
          <div className="bestLine">Best line: </div>
          <div className="boxLineBestImg"></div>
          <div className="bestL">x {bestLine}</div>
        </div>
        <BtnFullScreen />
      </div>
      <AudioToggleContainer />
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
                <Button
                  className="audioCall__next-box_btn-next"
                  onClick={onHandleClickBtnNext}
                  ref={btnNextRef}
                >
                  Далее
                </Button>
              ) : (
                <div
                  className="audioCall__next-box_btn-next"
                  onClick={onHandleClickBtnNotKnow}
                  ref={btnNoKnowRef}
                >
                  Не знаю
                </div>
              )}
            </div>
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default AudioCall;
