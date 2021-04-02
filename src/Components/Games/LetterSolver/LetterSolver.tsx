import React, { useEffect, useRef, useState } from "react";
import { Image, Spin } from "antd";
import ProgressBox from "../ProgressBox/ProgressBox";
import Word from "./Word/Word";
import "./LetterSolver.scss";
import ModalFinishLevel from '../Modal/ModalFinishLevel'

const LetterSolved: React.FC = ({
  words,
  count,
  right,
  wrong,
  setCount,
  currentWord,
  setCurrentWord,
  getWords,
  addRightWord,
  addWrongWord,
  nullifyRightWord,
  nullifyWrongWord
}: any) => {

  const wordRef = useRef(null);

  const [isCheck, setIsCheck] = useState(false);
  const [percent, setPercent] = useState(100);

  useEffect(() => {
    nullifyRightWord();
    nullifyWrongWord();
    if (count !== 0) setCount(0);
    getWords(0, 0);
  }, []);

  useEffect(() => {
    if (words) setCurrentWord(words[count]);
  }, [words]);

  useEffect(() => {
    if (count) {
      setCurrentWord(words[count]);
      setPercent(100);
    }
  }, [count]);

  const onCheck = (letters: Array<string>) => {
    if (letters.length > 1 && letters.join("") === currentWord.word)
      addRightWord(currentWord)
    else  addWrongWord(currentWord);
    setIsCheck(true);
  };

  const onHandleClickBtnNext = () => {    

    if (count < words.length - 1) {setCount(count + 1);}
    else { 
      ModalFinishLevel(right,wrong)
      }
    setIsCheck(false);
  };

  return (
    <div className="letterSolver">
      {currentWord ? (
        <>
          <div className="letterSolver__view-box">
            <div>
              <Image
                className="context_image"
                alt="Loading"
                fallback={`Error loading file ${currentWord.image}`}
                width="300px"
                height="200px"
                src={`https://api-rs-lang.herokuapp.com/${currentWord.image}`}
              ></Image>
            </div>
            <ProgressBox
              seconds="60"
              percent={percent}
              setPercent={setPercent}
              isCheck={isCheck}
              onCheck={onCheck}
            />
          </div>
          <div className="letterSolver__hide-box"></div>
          <Word
            wordSplit={currentWord.letters}
            wordRef={wordRef}
            isCheck={isCheck}
            onCheck={onCheck}
            onHandleClickBtnNext={onHandleClickBtnNext}
          />
        </>
      ) : (
        <Spin tip="Loading..." size="large" />
      )}
    </div>
  );
};

export default LetterSolved;
