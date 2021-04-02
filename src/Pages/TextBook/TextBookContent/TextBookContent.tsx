import React, { FC } from 'react';
import './TextBookContent.scss';
import WordItem from "../../../Components/WordItem/WordItem";

const TextBookContent: FC = ({ words, options, createUserWord, userId, token, currLevel }: any) => {

  const optionOnClick = (id: string, section: string) => {
    createUserWord(id, userId, section, {}, token);
  }

  return <div className={`text-book__content h${currLevel}`}>
    {words.map(({ id, _id, userWord, word, audio, audioMeaning, audioExample, textMeaning, image, textExample, transcription, textExampleTranslate, textMeaningTranslate, wordTranslate }: any, i: number) => {
      return <WordItem
        modificator={userWord ? userWord.difficulty : ''}
        audioExample={audioExample}
        audioMeaning={audioMeaning}
        audio={audio}
        image={image}
        key={id ? id : _id}
        word={word}
        textMeaning={textMeaning}
        textExample={textExample}
        transcription={transcription}
        textExampleTranslate={textExampleTranslate}
        textMeaningTranslate={textMeaningTranslate}
        wordTranslate={wordTranslate}
        options={!_id ? null : options.map(({ title, section }: any) => {
          if (userWord) {
            if (userWord.difficulty === section) {
              return {};
            }
          }
          return {
            title,
            onClick: () => optionOnClick(_id, section),
          }
        })}
      />
    })}
  </div>
};

export default TextBookContent;
