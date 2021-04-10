import React, { useEffect, useRef, useCallback } from 'react';
import { Spin } from 'antd';
import { FireTwoTone } from '@ant-design/icons';
import './Savanna.scss';
import Words from '../Words/Words';
import ModalFinishLevel from '../Modal/ModalFinishLevel';
import ProgressBoxContainer from '../ProgressBox/ProgressBoxContainer';
import rightAudio from '../../../assets/audio/right_answer.mp3';
import wrongAudio from '../../../assets/audio/wrong-answer.mp3';

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
}: any) => {
  const audioCallRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLDivElement>(null);
  const guessWordRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (words) setCurrentWord(words[count]);
  }, [words]);

  useEffect(() => {
    if (count) {
      setCurrentWord(words[count]);
    }
    setPercent(100.1);
  }, [count]);

//   useEffect(() => {
//     // if (guessWordRef.current) {
//     //   guessWordRef.current.classList.add('to-down');
//     //   guessWordRef.current.classList.add('to-up');
//     // }
//   }, [currentWord]);

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
          if (el.firstChild.innerHTML === currentWord.wordTranslate)
            el.classList.add('savanna_is-selected-win');
        });
      }

    if (guessWordRef.current) {
      guessWordRef.current.classList.remove('to-zoom-up');
      guessWordRef.current.classList.remove('to-down');
      guessWordRef.current.classList.remove('to-up');
      guessWordRef.current.classList.add('to-win-down');
    }

    new Audio(rightAudio).play();
    addRightWord(currentWord);
  };

  const toLost = () => {

    if (btnRef.current) {
        btnRef.current.childNodes.forEach((el: any) => {
          el.classList.add('savanna_no-active');
          if (el.firstChild.innerHTML === currentWord.wordTranslate)
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
    if (word.word === currentWord.word) {
      toWin();
    } else {
      toLost();
    }
    setIsCheck(true);
    setTimeout(() => {
      onHandleClickBtnNext();
    }, 2000);
  }

  const onOk = () => {
    fetchWords(level, page + 1);
  };

  const onCancel = () => {
    fetchWords(level, page);
  };

  const onHandleClickBtnNext = () => {
    if (count < words.length - 1) {
      setCount(count + 1);
    } else {
      ModalFinishLevel({ right, wrong, onOk, onCancel });
    }

    setIsCheck(false);
  };

  return (
    <div className="savanna__wrapper">
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
                <FireTwoTone />
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
