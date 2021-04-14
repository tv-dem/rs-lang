import React, { useEffect, useRef, useCallback, useState } from 'react';
import { Spin } from 'antd';
import { HeartOutlined, HeartFilled } from '@ant-design/icons';
import './Savanna.scss';
import Words from '../Words/Words';
import ModalFinishLevel from '../Modal/ModalFinishLevel';
import ProgressBoxContainer from '../ProgressBox/ProgressBoxContainer';
import rightAudio from '../../../assets/audio/right_answer.mp3';
import wrongAudio from '../../../assets/audio/wrong-answer.mp3';
import imgCrystal from '../../../assets/img/crystal.png';
import BtnFullScreen from '../BtnFullScreen/BtnFullScreen';

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
}: any) => {
  const crystalRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const guessWordRef = useRef<HTMLDivElement>(null);
  const heartsCol = useRef<Array<number>>(new Array(5).fill(''));

  const [sizeCrystal, setSizeCrystal] = useState(1);
  const [positionImg, setPositionImg] = useState(100);

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


  useEffect(()=>{
    const handleClick = (event: any) => {
      if(words){
        if (count < words.length - 1) {
          if (btnRef.current) {
            btnRef.current.childNodes.forEach((el: any, index:number) => {            
            if(event.code === `Digit${index+1}` || event.code === `Numpad${index+1}`) el.lastChild.click()                
            });
          }                      
        }
      }
    
    };

    document.addEventListener('keydown', handleClick);

    return () =>   document.removeEventListener('keydown', handleClick);  
  },[currentWord])

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

    new Audio(rightAudio).play();
    addRightWord(currentWord);
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

    new Audio(wrongAudio).play();
    addWrongWord(currentWord);
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

        <div className="boxBtnFullScreen">
          <BtnFullScreen />
        </div>
      </div>

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
          <Spin tip="Loading..." size="large" />
        )}
      </div>
    </div>
  );
};

export default Savanna;
