import React, { useEffect, useState, useRef } from "react";
import './sprintGame.scss';
import { Image, Spin, Button } from "antd";
import ModalFinishLevel from '../Modal/ModalFinishLevel';
import ProgressBoxContainer from '../ProgressBox/ProgressBoxContainer';
import shuffle from "../../../utils/shuffle";
import rightAudio from '../../../assets/audio/right_answer.mp3';
import wrongAudio from '../../../assets/audio/wrong-answer.mp3';
import BtnFullScreen from '../BtnFullScreen/BtnFullScreen';

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
  fetchWords,
  setPercent
}: any) => {
  const [isTrue, setIsTrue] = useState(false);
  const [wordTranslate, setWordTranslate] = useState('');
  const [showStatistics, setShowStatistics] = useState(false);
  const [arrCurrentLine, setArrCurrentLine] = useState([0]);

  const sprintBoxRef = useRef<HTMLDivElement>(null);
  let arrNumTranslate = new Array();

  const viewStatistics = () => {
  ModalFinishLevel({ right, wrong, onOk, onCancel, bestLine });
}

  useEffect(() => {
    if (words) {
    setCurrentWord(words[count]);
    console.log(words.length);
    setPercent(100);
    }
  }, [words]);

  const checkFinish = () => {
    if (count < words.length - 1) {
      setCount(count + 1);
    } else {
      setShowStatistics(true);
      setPercent(0);
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

  const endGame = () => {
    new Audio(wrongAudio).play();
    viewStatistics();
  }

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
let arr = new Array(currentLine);
arr.fill("");
// console.log(arr);
setArrCurrentLine(arr);

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

  const clickNo = () => {
    if (isTrue) {
      ifFalse();
    } else {
      ifTrue();
    }
    checkFinish();
  }

  const clickYes = () => {
    if (isTrue) {

      ifTrue();
    } else {
      ifFalse();
    }
    checkFinish();
  }

   useEffect(() => {
    const handleLeft = (event:any) => {
       if (event.code === "ArrowLeft") {
        console.log('ArrowLeft');
        clickNo();
      }
    };
    window.addEventListener('keydown', handleLeft);

    return () => {
      window.removeEventListener('keydown', handleLeft);
    };
  }, []);


 

  return (
    <div className="transition-group">
    <div className="sprintWrapper">
    
      <div className="sprintBox" ref={sprintBoxRef}>
      

        {!pending && currentWord ? (
          <>
<div className="boxTitleSprint">
<div className="boxLineBest">
<div className="bestLine">Best line: </div>
<div className="boxLineBestImg"></div>
<div className="bestLine">x {bestLine}</div>
</div>
<div className="boxBtnFullScreen">
            <BtnFullScreen/>
    </div>
</div>
            
<div className="boxLine">
{arrCurrentLine.map((e:number,i:number) =>
<div className="line" key={i}>{e}</div>
)
}
</div>

            <div>
              <Image
                className="context_image imgSprint"
                alt="Loading"
                fallback={`Error loading file ${currentWord.image}`}
                width="300px"
                height="200px"
                src={`https://api-rs-lang.herokuapp.com/${currentWord.image}`}
              ></Image>
            </div>
            <div className="sprintWord">{currentWord.word}</div>
            <div className="sprintWordTranslate">{wordTranslate}</div>
<div className="sprintBoxButton">
              <div className="sprintBtnNo btn" onClick={() => clickNo()}>Не верно</div>
              <div className="sprintBtnYes btn"  onClick={() => clickYes()}>Верно</div>
            </div>
          </>
        ) : (
          <Spin tip="Loading..." size="large" />
        )}
      </div>
      {words ?
      <div className="ProgressSprintBox">
      <ProgressBoxContainer
                  seconds={Number(words.length*3)}
                  isCheck={false}
                  onCheck={endGame}
                />
                </div>
: <></>
      }
    </div>
    </div>
  );
}

export default TrueOrFalse;
