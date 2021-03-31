import React, { FC } from 'react';
import './TextBookContent.scss';
import WordItem from "../../../Components/WordItem/WordItem";

const TextBookContent: FC = ({ words, options }: any) => {
    return <div className='text-book__content'>
        {words.map(({ id, word, textMeaning, textExample, transcription, textExampleTranslate, textMeaningTranslate, wordTranslate }: any, i: number) => {
            return <WordItem
                key={id}
                word={word}
                textMeaning={textMeaning}
                textExample={textExample}
                transcription={transcription}
                textExampleTranslate={textExampleTranslate}
                textMeaningTranslate={textMeaningTranslate}
                wordTranslate={wordTranslate}
                options={options.map((title: any) => ({ title, onClick: () => { } }))}
            />
        })}
    </div>
};

export default TextBookContent;
