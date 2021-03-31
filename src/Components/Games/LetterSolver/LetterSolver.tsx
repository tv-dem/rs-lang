import React, { useEffect, useRef, useState } from "react";
import ProgressBox from "../ProgressBox/ProgressBox";
import Word from "./Word/Word";

const LetterSolved: React.FC = ({
  words,
  count,
  setCount,
  currentWord,
  setCurrentWord,
}: any) => {
  const wordRef = useRef(null);
  const [isCheck, setIsCheck] = useState(false);

  useEffect(() => {
    if (!currentWord) {
     if(!count) setCount(0);
      setCurrentWord(words[count]);
    }
  }, []);

  const splitCurrentWord = () => {
    return currentWord.word.split("");
  };

  const onCheck = () => {
    console.log("onCheck");
  };

  const onHandleClickBtnNext = () => {
    console.log("onHandleClickBtnNext");
  };

  return (
    <div className="letterSolver">
      {currentWord && (
        <>
          <ProgressBox seconds="60" isCheck={isCheck} onCheck={onCheck} />

          <Word
            wordSplit={splitCurrentWord()}
            wordRef={wordRef}
            isCheck={isCheck}
            onCheck={onCheck}
            onHandleClickBtnNext={onHandleClickBtnNext}
          />
        </>
      )}
    </div>
  );
};

export default LetterSolved;
