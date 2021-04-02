import React, { FC } from 'react';
import './DictionaryContent.scss';
import WordItem from "../../../Components/WordItem/WordItem";

const DictionaryContent: FC = ({ words, options, currSection }: any) => {
  console.log(words)
  return <div className={`text-book__content h${currSection}`}>
    {words.map(({ id, word, textMeaning, textExample, transcription, textExampleTranslate, textMeaningTranslate, wordTranslate }: any, i: number) => {
      return <WordItem
        options={options.map((title: any) => ({ title, onClick: () => { } }))}
        key={id}
        word={word}
        textMeaning={textMeaning}
        textExample={textExample}
        transcription={transcription}
        textExampleTranslate={textExampleTranslate}
        textMeaningTranslate={textMeaningTranslate}
        wordTranslate={wordTranslate}
      />
    })}
  </div>
};

export default DictionaryContent;
