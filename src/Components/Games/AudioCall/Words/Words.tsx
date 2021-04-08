import React, { useMemo } from 'react';
import shuffle from '../../../../utils/shuffle';

const Words = ({ words, currentWord, onCheck, btnRef }: any) => {
  const filterAnswerVariants = useMemo(() => {
    return shuffle(
      shuffle(words.filter((word: any) => currentWord.word !== word.word))
        .filter((word: any, i: number) => i < 4)
        .concat(currentWord),
    );
  }, [currentWord]);

  return (
    <div className="audioCall__choose-box" ref={btnRef}>
      {filterAnswerVariants.map((word: any) => (
        <div key={word.id} className="audioCall__choose-box_btn-check">
          <div
            className="audioCall__choose-box_btn-check_background"
            onClick={(event: React.MouseEvent<HTMLElement>) => onCheck(word)}
          >
            {word.wordTranslate}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Words;
