import React, { useEffect, useRef, useState } from 'react';
import { Image, Spin, Button } from 'antd';
import './AudioCall.scss';
import ModalFinishLevel from '../Modal/ModalFinishLevel';
import rightAudio from '../../../assets/audio/right_answer.mp3';
import wrongAudio from '../../../assets/audio/wrong-answer.mp3';
import shuffle from '../../../utils/shuffle'


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
  bestLine
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
    if (isCheck) {
      if (imageRef.current && answerRef.current) {
        imageRef.current.classList.remove('toBackPlaceImg');
        imageRef.current.classList.add('toChangePlaceImg');
        answerRef.current.classList.add('visible');
        answerRef.current.classList.remove('hidden');
      }
    } else {
      if (imageRef.current && answerRef.current) {
        imageRef.current.classList.remove('toChangePlaceImg');
        imageRef.current.classList.add('toBackPlaceImg');
        answerRef.current.classList.add('hidden');
        answerRef.current.classList.remove('visible');
      }
    }
  }, [isCheck]);

  const toWin = () => {
    new Audio(rightAudio).play();
    setTimeout(
      () =>
        new Audio(
          `https://api-rs-lang.herokuapp.com/${currentWord.audio}`,
        ).play(),
      1000,
    );
    addRightWord(currentWord);
  };

  const toLost = () => {
    new Audio(wrongAudio).play();
    setTimeout(
      () =>
        new Audio(
          `https://api-rs-lang.herokuapp.com/${currentWord.audio}`,
        ).play(),
      1000,
    );
    addWrongWord(currentWord);
  };

  const onCheck = (word:any) => {
    if ( word.word === currentWord.word) {
      toWin();
    } else {
      toLost();
    }
    setIsCheck(true);
  };

  const onOk = () => {
    fetchWords(level, page + 1)
  }

  const onCancel = () => {
    fetchWords(level, page)
  }

  const onHandleClickBtnNext = () => {
    if (count < words.length - 1) {
      setCount(count + 1);
    } else {
      ModalFinishLevel({ right, wrong, onOk, onCancel, bestLine});
    }
    setIsCheck(false);
  };

  return (
    <div className="audioCall__wrapper ">
      <div ref={audioCallRef} className="audioCall">
        {!pending && currentWord ? (
          <div>
            <div className="audioCall__view-box">
              <div className="audioCall__view-box_image-box" >
                {isCheck ?
                  <Image
                    className="context_image"
                    alt="Loading"
                    fallback={`Error loading file ${currentWord.image}`}
                    width="300px"
                    height="200px"
                    src={`https://api-rs-lang.herokuapp.com/${currentWord.image}`}
                  ></Image>
                  :
                  <div>{currentWord.word}</div>
                }
              </div>
            </div>
            <div className="audioCall__view-box_answer-box hidden" ref={answerRef}>
              <div className="answer-box__word-word">{currentWord.word}</div>
              <div className="answer-box__word-transcription">
                {currentWord.transcription}
              </div>
              <div className="answer-box__word-wordTranslate">
                {currentWord.wordTranslate}
              </div>
            </div>

            {isCheck ? (


              <Button className="context_btn_next" onClick={onHandleClickBtnNext}>
                NEXT
              </Button>
            ) : (
              <div className="audioCall__change-box">
               { shuffle( shuffle(words.filter((word:any)=>currentWord.word!==word.word)).filter((word:any,i:number)=>i<4).concat(currentWord).map((word:any)=>
               <Button key={word.id} className="context_btn_check" onClick={()=>onCheck(word)}>
                 { word.word}
               </Button>))}

              </div>
            )}
          </div>
        ) : (
          <Spin tip="Loading..." size="large" />
        )}
      </div>
    </div>
  );
};

export default AudioCall;
