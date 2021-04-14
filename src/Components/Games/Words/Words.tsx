import React, { useMemo } from 'react';
import shuffle from '../../../utils/shuffle';

const Words = ({ words, currentWord, onCheck, btnRef , numOfWords }: any) => {
  const filterAnswerVariants = useMemo(() =>  shuffle(
      shuffle(words.filter((word: any) => currentWord.word !== word.word))
        .filter((word: any, i: number) => i < numOfWords)
        .concat(currentWord),
    )
  , [currentWord]);

  return (
    <div className="variants-answer" ref={btnRef}>
      {filterAnswerVariants.map((word: any,index:number) => (
        <div key={word.id} className="variants-answer__choose-box_btn-check">

          <div className="variants-answer__choose-box_btn-check_color-number">  {index+1}</div>              
          <div
            className="variants-answer__choose-box_btn-check_background "
            onClick={() => onCheck(word)}
          >
           {word.wordTranslate} 
          </div>
        </div>
      ))}
    </div>
  );
};

export default Words;
