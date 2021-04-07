import React, { useEffect, useState, useRef } from "react";
import './sprintGame.scss';
import { Image, Spin, Button } from "antd";
import ModalFinishLevel from '../Modal/ModalFinishLevel';
import fullScreen from "../../../utils/fullScreen";
import shuffle from "../../../utils/shuffle";
import rightAudio from '../../../assets/audio/right_answer.mp3';
import wrongAudio from '../../../assets/audio/wrong-answer.mp3';

const TrueOrFalse: React.FC = ({
  words,
  count,
  currentWord,
  addRightWord,
  addWrongWord,
  right,
  wrong,
  level,
  page,
  setCount,
  setCurrentWord,
  setCurrentLine,
  setBestLine,
  currentLine,
  bestLine,
  pending,
  fetchWords
}: any) => {
  const [isTrue, setIsTrue] = useState(false);
  const [wordTranslate, setWordTranslate] = useState('');
  const [showStatistics, setShowStatistics] = useState(false);

  const sprintBoxRef = useRef<HTMLDivElement>(null);
  let arrNumTranslate = new Array();

  const viewStatistics = () => {
  ModalFinishLevel({ right, wrong, onOk, onCancel });
}

  useEffect(() => {
    if (words) setCurrentWord(words[count]);
  }, [words]);

  const checkFinish = () => {
    if (count < words.length - 1) {
      setCount(count + 1);
    } else {
      setShowStatistics(true);
    }
  }

  useEffect(() => {
    if (words) {
      words.forEach((e: any, i: number) => {
        if (i < words.length - 1) {
          arrNumTranslate.push(i);
        }
      });
      arrNumTranslate = shuffle(arrNumTranslate);
      setCurrentWord(words[count]);
      setIsTrue(Boolean(arrNumTranslate[count] % 2));
    }
    if (sprintBoxRef.current) {
      sprintBoxRef.current.classList.add('hiddenSprint');
      sprintBoxRef.current.classList.remove('visibleCorrect');
      sprintBoxRef.current.classList.remove('visibleIncorrect');
    }
  }, [count]);

  const onOk = () => {
    fetchWords(level, page + 1);
    setShowStatistics(false);
  }

  const onCancel = () => {
    fetchWords(level, page);
    setShowStatistics(false);
  }

  useEffect(() => {
    if (currentWord) {
      if (isTrue) {
        setWordTranslate(currentWord.wordTranslate);
      } else {
        let arrTranslate = words.filter((word: any) => word.word != currentWord.word);
        let countRandom = Math.round(1 - 0.5 + Math.random() * (arrTranslate.length - 1));
        setWordTranslate(arrTranslate[countRandom].wordTranslate);
      }
    }
  }, [currentWord]);

  useEffect(()=> {
if(currentLine>bestLine) {
  setBestLine(currentLine);
}
  }, [currentLine])

  const ifTrue = () => {
  setCurrentLine(currentLine+1);


    new Audio(rightAudio).play();
    addRightWord(currentWord);
    if (sprintBoxRef.current) {
      sprintBoxRef.current.classList.remove('hiddenSprint');
      sprintBoxRef.current.classList.add('visibleCorrect');
    }
  }

  const ifFalse = () => {
    setCurrentLine(0);
    new Audio(wrongAudio).play();
    addWrongWord(currentWord);
    if (sprintBoxRef.current) {
      sprintBoxRef.current.classList.remove('hiddenSprint');
      sprintBoxRef.current.classList.add('visibleIncorrect');
    }
  }

  const checkNo = () => {
    if (isTrue) {
      ifFalse();
    } else {
      ifTrue();
    }
    checkFinish();
  }

  const checkYes = () => {
    if (isTrue) {
      ifTrue();
    } else {
      ifFalse();
    }
    checkFinish();
  }

  return (
    <div className="sprintWrapper">

      <div className="sprintBox" ref={sprintBoxRef}>
        {!pending && currentWord ? (
          <>
            <div className="sprintBoxTitle">
            <div className="fullScreenBtn"></div>
            <div className="sprint">Sprint Game</div>
    <Button className="fullScreenBtn" type="primary" aria-hidden="true" onClick={() => fullScreen()}>full</Button>
    </div>
            <div className="sprintScore">count: {count}</div>
            <div className="sprintScore">current line: {currentLine}</div>
            <div className="sprintScore">best line: {bestLine}</div>

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
            <div className="sprint">{currentWord.word}</div>
            <div className="sprint">{wordTranslate}</div>
<div className="sprintBoxButton">
            {showStatistics
            ? <>
              <Button className="sprintBtn" type="primary"aria-hidden="true" onClick={() =>viewStatistics()}>Статистика игры</Button>
              <Button className="sprintBtn" type="primary" onClick={()=>onCancel()}>Повторить</Button>
            </>
: <>
              <Button className="sprintBtn" type="primary" aria-hidden="true" onClick={() => checkNo()}>Не верно</Button>
              <Button className="sprintBtn" type="primary" aria-hidden="true" onClick={() => checkYes()}>Верно</Button>
</>

            }
            </div>
            
          </>
        ) : (
          <Spin tip="Loading..." size="large" />
        )}
      </div>
    </div>
  );
}

export default TrueOrFalse;
