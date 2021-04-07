import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Image, Spin, Button } from 'antd';
import {  SoundTwoTone} from '@ant-design/icons';
import './AudioCall.scss';
import ModalFinishLevel from '../Modal/ModalFinishLevel';
import rightAudio from '../../../assets/audio/right_answer.mp3';
import wrongAudio from '../../../assets/audio/wrong-answer.mp3';
import shuffle from '../../../utils/shuffle';

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
  const imageRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const audioCallRef = useRef<HTMLDivElement>(null);

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
    // if (isCheck) {
    //   if (imageRef.current && answerRef.current) {
    //     imageRef.current.classList.remove('toBackPlaceImg');
    //     imageRef.current.classList.add('toChangePlaceImg');
    //     answerRef.current.classList.add('visible');
    //     answerRef.current.classList.remove('hidden');
    //   }
    // } else {
    //   if (imageRef.current && answerRef.current) {
    //     imageRef.current.classList.remove('toChangePlaceImg');
    //     imageRef.current.classList.add('toBackPlaceImg');
    //     answerRef.current.classList.add('hidden');
    //     answerRef.current.classList.remove('visible');
    //   }
    // }
  }, [isCheck]);

  const toWin = () => {
    new Audio(rightAudio).play();
    addRightWord(currentWord);
  };

  const toLost = () => {
    new Audio(wrongAudio).play();
    addWrongWord(currentWord);
  };

  const onCheck = (word: any,event:React.MouseEvent<HTMLElement>) => {
    if (word.word === currentWord.word) {
      // event.currentTarget.classList.add('hidden')
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

  const onHandleClickBtnNext = () => {
    if (count < words.length - 1) {
      setCount(count + 1);
    } else {
      ModalFinishLevel({ right, wrong, onOk, onCancel });
    }
    setIsCheck(false);
  };

  const onHandleClickBtnNotKnow = () => {
    // onCheck('');
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
                <div className="audioCall__view-box_answer answer" ref={answerRef}>
                <SoundTwoTone twoToneColor="#d19aed" onClick={playAudio}/>
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

            <div className="audioCall__choose-box">
              {shuffle(
                shuffle(
                  words.filter((word: any) => currentWord.word !== word.word),
                )
                  .filter((word: any, i: number) => i < 4)
                  .concat(currentWord)
                  .map((word: any) => (
                    <div
                      key={word.id}
                      className="audioCall__choose-box_btn-check"
                      onClick={(event: React.MouseEvent<HTMLElement>) => onCheck(word,event)}
                    >
                      {word.wordTranslate}
                    </div>
                  )),
              )}
            </div>
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
