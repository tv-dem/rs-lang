import React, {FC, useEffect} from 'react';
import './DictionaryContent.scss';
import WordItem from "../../../Components/WordItem/WordItem";

const DictionaryContent: FC = ({words}:any) => {
    return <div className='text-book__content'>
        {words.map(({id, word, textMeaning, textExample, transcription, textExampleTranslate, textMeaningTranslate, wordTranslate}: any, i:number) => {
            return <WordItem
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
