import React,{useRef,useState} from 'react';
import ProgressBox from '../ProgressBox/ProgressBox'
import Word from './Word/Word'

const LetterSolved: React.FC = () => {
    const wordRef = useRef(null);
    const [isCheck, setIsCheck] = useState(false);

const onCheck=()=>{
    console.log("onCheck")
}

const onHandleClickBtnNext = () => {
  console.log('onHandleClickBtnNext')
  };

    return (
    <div className="letterSolver" >
      
<ProgressBox seconds="60" isCheck={isCheck} onCheck={onCheck}  />

<Word wordSplit={['q','w','e','r','t','y']} wordRef={wordRef} isCheck={isCheck} onCheck={onCheck} onHandleClickBtnNext={onHandleClickBtnNext} />

    </div>)
}

export default LetterSolved;
