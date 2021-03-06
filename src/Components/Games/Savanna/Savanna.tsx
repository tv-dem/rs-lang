import React, { useEffect, useRef, useState } from 'react';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import { nanoid } from 'nanoid';
import './Savanna.scss';
import Words from '../Words/Words';
import ModalFinishLevel from '../Modal/ModalFinishLevel';
import ProgressBoxContainer from '../ProgressBox/ProgressBoxContainer';
import AudioToggleContainer from '../AudioToggle/AudioToggleContainer'
import { audioAnswer } from '../../../utils/audio';
import imgCrystal from '../../../assets/img/crystal.png';
import BtnFullScreen from '../BtnFullScreen/BtnFullScreen';
import BestLineContainer from '../BestLine/BestLineContainer';
import Loading from "../../Loading/Loading";
import {createUserWord} from "../../../Redux/StatReducer/thunk";

const Savanna: React.FC = ({
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
  setPercent,
  bestLine,
  hearts,
  setValHearts,
  setPage,
  currentLine,
  setCurrentLine,
  isSound,
  UpdateGameStat,
  setStat,
  userId,
  token,
  body,
  createUserWord,
  SetGameStat
}: any) => {
  const crystalRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const guessWordRef = useRef<HTMLDivElement>(null);
  const heartsCol = useRef<Array<number>>(new Array(5).fill(''));

  const [sizeCrystal, setSizeCrystal] = useState(1);
  const [positionImg, setPositionImg] = useState(100);


  useEffect(() => {
    if(currentWord){
      if(!currentWord.userWord) {
        createUserWord(userId, currentWord.id, 'learn', {}, token)
      }
    }
    const currentStat = [...body['gameStatSavanna']];
    if(!currentWord){
      currentStat.push({
        bestLine,
        count,
        correctPercent: `${count ? Math.trunc((right.length / count) * 1000) / 10 : 0}%`,
        key: nanoid(),
        date: new Date().toLocaleDateString(),
        time: `${new Date().getHours()}-${new Date().getMinutes()}`
      })
    }
    console.log('prev state', currentWord);
    currentStat[currentStat.length - 1].count = count;
    currentStat[currentStat.length - 1].bestLine = bestLine;
    currentStat[currentStat.length - 1].correctPercent = `${count ? Math.trunc((right.length / count) * 1000) / 10 : 0}%`;
    UpdateGameStat('gameStatSavanna', currentStat);

    return () => {
      setStat(userId, token, body);
    }
  }, [count]);

  useEffect(() => {
    if (words) setCurrentWord(words[count]);
    setSizeCrystal(1);
    setPositionImg(100);
    setValHearts(0);
  }, [words]);

  useEffect(() => {
    if (count && words) {
      setCurrentWord(words[count]);
      setPercent(100.1);
    }

  }, [count]);


  useEffect(() => {
    const handleClick = (event: any) => {
      event.preventDefault();
      if (words) {
        if (count < words.length - 1) {
          if (btnRef.current) {
            btnRef.current.childNodes.forEach((el: any, index: number) => {
              if (event.code === `Digit${index + 1}` || event.code === `Numpad${index + 1}`) el.lastChild.click()
            });
          }
        }
      }

    };

    document.addEventListener('keydown', handleClick);

    return () => document.removeEventListener('keydown', handleClick);
  }, [currentWord])

  useEffect(() => {
    if (words) {
      if (hearts > 4) {
        setIsCheck(true);
        ModalFinishLevel({ right, wrong, onOk, onCancel, bestLine });
      } else {
        setTimeout(() => {
          onHandleClickBtnNext();
        }, 2000);
      }
    }
  }, [wrong, right]);

  useEffect(() => {
    if (crystalRef.current) {
      crystalRef.current.style.transform = `scale(${sizeCrystal})`;
    }
  }, [sizeCrystal]);

  useEffect(() => {
    if (wrapperRef.current) {
      wrapperRef.current.style.backgroundPositionY = `${positionImg}%`;
    }
  }, [positionImg]);

  useEffect((): any => {
    let timer: null | NodeJS.Timeout = null;

    if (isCheck) {
      if (guessWordRef.current) {
        timer = setTimeout(() => {
          if (guessWordRef.current) {
            guessWordRef.current.classList.remove('to-zoom-up');
            guessWordRef.current.classList.remove('to-win-down');
          }
        }, 1000);
        guessWordRef.current.classList.remove('to-down');
        guessWordRef.current.classList.add('to-up');
      }
    } else {
      if (btnRef.current) {
        btnRef.current.childNodes.forEach((el: any) => {
          el.classList.remove('savanna_no-active');
          el.classList.remove('savanna_is-selected-win');
          el.classList.remove('savanna_is-selected-lose');
        });
      }

      if (guessWordRef.current) {
        guessWordRef.current.classList.remove('to-win-down');
        guessWordRef.current.classList.remove('to-zoom-up');
        guessWordRef.current.classList.remove('to-up');
        guessWordRef.current.classList.add('to-down');
      }
    }
    return () => (timer ? clearTimeout(timer) : null);
  }, [isCheck]);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (guessWordRef.current) {
        guessWordRef.current.classList.remove('to-zoom-up');
        guessWordRef.current.classList.remove('to-up');
        guessWordRef.current.classList.add('to-down');
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [pending]);

  const toWin = () => {
    console.log(bestLine)
    if (btnRef.current) {
      btnRef.current.childNodes.forEach((el: any) => {
        el.classList.add('savanna_no-active');
        if (el.lastChild.innerHTML === currentWord.wordTranslate)
          el.classList.add('savanna_is-selected-win');
      });
    }

    if (guessWordRef.current) {
      guessWordRef.current.classList.remove('to-zoom-up');
      guessWordRef.current.classList.remove('to-down');
      guessWordRef.current.classList.remove('to-up');
      guessWordRef.current.innerHTML = '';
      guessWordRef.current.classList.add('to-win-down');
    }

    setTimeout(() => {
      setSizeCrystal(() => sizeCrystal + 0.1);
      setPositionImg(() => positionImg - 5);
    }, 500);

    if (isSound) audioAnswer[0].play();

    addRightWord(currentWord);
    setCurrentLine(currentLine + 1);
  };

  const toLost = () => {
    setValHearts(hearts + 1);
    if (btnRef.current) {
      btnRef.current.childNodes.forEach((el: any) => {
        el.classList.add('savanna_no-active');
        if (el.lastChild.innerHTML === currentWord.wordTranslate)
          el.classList.add('savanna_is-selected-lose');
      });
    }

    if (guessWordRef.current) {
      guessWordRef.current.classList.add('to-zoom-up');
      guessWordRef.current.classList.remove('to-down');
      guessWordRef.current.classList.add('to-up');
    }

    if (isSound) audioAnswer[1].play();

    addWrongWord(currentWord);
    setCurrentLine(0);
  };

  function onCheck(word: any) {
    setIsCheck(true);

    if (word.word === currentWord.word) {
      toWin();
    } else {
      toLost();
    }
  }

  const onOk = () => {
    setPage(page + 1);
    fetchWords(level, page + 1);
    setIsCheck(false);
  };

  const onCancel = () => {
    fetchWords(level, page);
    setIsCheck(false);
  };

  const onHandleClickBtnNext = () => {
    if (count < words.length - 1 && hearts < 5) {
      setCount(count + 1);
    } else {
      addWrongWord(words.filter((w: object, i: number) => i > count - 1));
    }
    setIsCheck(false);
  };

  return (
    <div ref={wrapperRef} className="savanna__wrapper">
      <div className="savanna__wrapper_setting-box">


        <div className="boxLineBest">

          <div className="boxLineBestLine">

            <div className="life-box">
              <div className="life-box__heart">
                {heartsCol.current.map((e, i) => {
                  return i > hearts || i === hearts ? (
                    <HeartFilled key={i} className="life-box__heart_fulled" />
                  ) : (
                    <HeartOutlined key={i} className="life-box__heart_outliner" />
                  );
                })}
              </div>

            </div>
            <div className="bestLine">Best line: </div>
            <div className="boxLineBestImg"></div>
            <div className="bestL">x {bestLine}</div>
          </div>
          <BtnFullScreen />
        </div>

        {/* <div className="boxBtnFullScreen">
          <BtnFullScreen />
        </div> */}
      </div>
      <AudioToggleContainer />

      <BestLineContainer />

      <div className="savanna">
        {!pending && currentWord ? (
          <>
            <div className="savanna__view-box">
              <div className="savanna__view-box_view word-to-guess">
                <div className="word-to-guess_transition" ref={guessWordRef}>
                  {currentWord.word}
                </div>
              </div>
              <Words
                words={words}
                currentWord={currentWord}
                onCheck={onCheck}
                btnRef={btnRef}
                numOfWords={Number(3)}
              />
              <div className="savanna__view-box_view-crystal">
                <div
                  ref={crystalRef}
                  className="savanna__view-box_view-crystal-size"
                >
                  <img width="30px" src={imgCrystal} alt="crystal" />
                </div>
              </div>
            </div>
            <ProgressBoxContainer
              seconds={Number(5)}
              isCheck={isCheck}
              onCheck={onCheck}
            />
          </>
        ) : (
          <Loading />
        )}
      </div>
    </div>
  );
};

export default Savanna;
