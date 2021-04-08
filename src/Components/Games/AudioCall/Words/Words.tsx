import React, {  useMemo } from "react";
import shuffle from '../../../../utils/shuffle';


const Words = ({words,currentWord,onCheck,btnRef}:any) => {

const filterAnswerVariants=useMemo( ()=>{
    return shuffle(
        shuffle(
          words.filter((word: any) => currentWord.word !== word.word),
        )
          .filter((word: any, i: number) => i < 4)
          .concat(currentWord))
},[currentWord])

  return (
    <div className="audioCall__choose-box" ref={btnRef}>

    {filterAnswerVariants.map((word: any) => (
            <div className="audioCall__choose-box_btn-check" ref={btnRef} >
            <div
            
              className="audioCall__choose-box_btn-check_background"             
              key={word.id}              
              onClick={(event: React.MouseEvent<HTMLElement>) =>{
                event.currentTarget.classList.toggle('audioCall_is-selected')
                onCheck(word)
              }}
            >
              {word.wordTranslate}
            </div>
            </div>
    ))}
  </div>
  )
};

export default Words;
