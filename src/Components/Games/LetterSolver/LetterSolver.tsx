import React, { useEffect, useRef, useState } from "react";
import { Image, Spin } from "antd";
import ProgressBox from "../ProgressBox/ProgressBox";
import Word from "./Word/Word";
import "./LetterSolver.scss";

const LetterSolved: React.FC = ({
  words,
  count,
  setCount,
  currentWord,
  setCurrentWord,
  getTextBookWordsTC,
}: any) => {
  const wordRef = useRef(null);
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    getTextBookWordsTC(1, 1);
  }, []);

  useEffect(() => {
    if (!count) setCount(0);
    if (words) setCurrentWord(words[count]);
  }, [words]);

  useEffect(() => {
    console.log(`currentWord`);
    console.log(currentWord);
  }, [currentWord]);

  const onCheck = () => {
    console.log("onCheck");
  };

  const onHandleClickBtnNext = () => {
    console.log("onHandleClickBtnNext");
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
            <ProgressBox seconds="60" isCheck={isCheck} onCheck={onCheck} />
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
