import React, { useEffect, useRef, useState } from 'react';
import { Image } from 'antd';
import ProgressBoxContainer from '../ProgressBox/ProgressBoxContainer';
import Word from './Word/Word';
import './LetterSolver.scss';
import ModalFinishLevel from '../Modal/ModalFinishLevel';
import rightAudio from '../../../assets/audio/right_answer.mp3';
import wrongAudio from '../../../assets/audio/wrong-answer.mp3';
import BestLineContainer from '../BestLine/BestLineContainer';
import BtnFullScreen from '../BtnFullScreen/BtnFullScreen';
import Loading from "../../Loading/Loading";

const LetterSolved: React.FC = ({
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
  setPercent,
  isCheck,
  setIsCheck,
  setCurrentLine,
  currentLine,
  bestLine,
  setPage,
}: any) => {
  const wordRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const answerRef = useRef<HTMLDivElement>(null);
  const letterSolverRef = useRef<HTMLDivElement>(null);
  const btnCheckRef = useRef<HTMLDivElement>(null); 
  const btnNextRef = useRef<HTMLDivElement>(null); 
  

  useEffect(() => {
    if (words) setCurrentWord(words[count]);

  const  handleClick = (event: any) => {
      if(words){
        if (count < words.length - 1) {
          if (btnNextRef.current) {
            if(event.code === `Enter`) btnNextRef.current.click()                
          }         
          if (btnCheckRef.current) {
            if(event.code === `Space`) btnCheckRef.current.click()                
          }            
        }
      }    
    };
    if(handleClick) document.addEventListener('keydown', handleClick);

    return () => { if(handleClick) document.removeEventListener('keydown', handleClick);} 

  }, [words]);

  useEffect(() => {
    if (count) {
      setCurrentWord(words[count]);       
    }
  }, [count]);

  

  useEffect(() => {

    if (isCheck) {

      if (imageRef.current && progressRef.current && answerRef.current) {
        imageRef.current.classList.remove('toBackPlaceImg');
        imageRef.current.classList.add('toChangePlaceImg');
        progressRef.current.classList.remove('toBackPlaceProgress');
        progressRef.current.classList.add('toChangePlaceProgress');
        answerRef.current.classList.add('visible');
        answerRef.current.classList.remove('hidden');
      }
    } else {
      

      if (imageRef.current && progressRef.current && answerRef.current) {
        imageRef.current.classList.remove('toChangePlaceImg');
        imageRef.current.classList.add('toBackPlaceImg');
        progressRef.current.classList.remove('toChangePlaceProgress');
        progressRef.current.classList.add('toBackPlaceProgress');
        answerRef.current.classList.add('hidden');
        answerRef.current.classList.remove('visible');
      }
      if (letterSolverRef.current) {
        letterSolverRef.current.classList.remove('winEffect');
        letterSolverRef.current.classList.remove('badEffect');
      }
     
    }
    
  }, [isCheck]);

  const toWin = () => {
    setCurrentLine(currentLine+1);
    if (letterSolverRef.current)
      letterSolverRef.current.classList.add('winEffect');
    if (wordRef.current) wordRef.current.classList.add('right');
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
    setCurrentLine(0);
    if (letterSolverRef.current)
      letterSolverRef.current.classList.add('badEffect');
    new Audio(wrongAudio).play();
    setTimeout(
      () =>
        new Audio(
          `https://api-rs-lang.herokuapp.com/${currentWord.audio}`,
        ).play(),
      1000,
    );
    if (wordRef.current) wordRef.current.classList.add('wrong');
    addWrongWord(currentWord);
  };

  const onCheck = (letters: Array<string>) => {
    if (letters.length > 1 && letters.join('') === currentWord.word) {
      toWin();
    } else {
      toLost();
    }
    setIsCheck(true);
  };

  const onOk=()=>{
    setPage(page + 1);
    fetchWords(level,page+1)
  }

  const onCancel=()=>{
    fetchWords(level,page)
  }

  const onHandleClickBtnNext = () => {
    if (wordRef.current) {
      wordRef.current.classList.remove('right');
      wordRef.current.classList.remove('wrong');
    }
    if (count < words.length - 1) {
      setCount(count + 1);
    } else {
      ModalFinishLevel({right, wrong,onOk,onCancel, bestLine});
    }
    setPercent(100);
    setIsCheck(false);
  };

  return (
    <div className="letterSolver__wrapper ">
    <div className="boxLineBest">
      <div className="boxLineBestLine">
                  <div className="bestLine">Best line: </div>
                  <div className="boxLineBestImg"></div>
                  <div className="bestL">x {bestLine}</div>
                  </div>
                  <BtnFullScreen/>
                </div>
              <BestLineContainer />
      <div ref={letterSolverRef} className="letterSolver ">
        {!pending && currentWord ? (
          <>
            <div className="letterSolver__view-box">
              <div className="letterSolver__view-box_image-box" ref={imageRef}>
                <Image
                  className="context_image"
                  alt="Loading"
                  fallback={`Error loading file ${currentWord.image}`}
                  width="300px"
                  height="200px"
                  src={`https://api-rs-lang.herokuapp.com/${currentWord.image}`}
                ></Image>
              </div>
              <div className="letterSolver__view-box_answer-box hidden" ref={answerRef}>
                <div className="answer-box__word-word">{currentWord.word}</div>
                <div className="answer-box__word-transcription">
                  {currentWord.transcription}
                </div>
                <div className="answer-box__word-wordTranslate">
                  {currentWord.wordTranslate}
                </div>
              </div>
              <div className="letterSolver__view-box_progress-box" ref={progressRef}>
                <ProgressBoxContainer
                  seconds={Number(60)}               
                  isCheck={isCheck}
                  onCheck={onCheck}
                />
              </div>
            </div>
            <div className="letterSolver__hide-box"></div>
            <Word
              wordSplit={currentWord.letters}
              wordRef={wordRef}
              btnCheckRef={btnCheckRef}
              btnNextRef={btnNextRef}
              isCheck={isCheck}
              onCheck={onCheck}
              onHandleClickBtnNext={onHandleClickBtnNext}
            />
          </>
        ) : (
          <Loading/>
        )}
      </div>
    </div>
  );
};

export default LetterSolved;
