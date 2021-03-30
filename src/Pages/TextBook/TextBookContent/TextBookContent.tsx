import React, {FC} from 'react';
import './TextBookContent.scss';
import WordItem from "../../../Components/WordItem/WordItem";

const TextBookContent: FC = ({words, options}:any) => {
    return <div className='text-book__content'>
        {words.map(({id, word, audio,audioMeaning,audioExample, textMeaning, image, textExample, transcription, textExampleTranslate, textMeaningTranslate, wordTranslate}: any, i:number) => {
            return <WordItem
                audioExample={audioExample}
                audioMeaning={audioMeaning}
                audio={audio}
                image={image}
                key={id}
                word={word}
                textMeaning={textMeaning}
                textExample={textExample}
                transcription={transcription}
                textExampleTranslate={textExampleTranslate}
                textMeaningTranslate={textMeaningTranslate}
                wordTranslate={wordTranslate}
                options={options.map((title:any)=>({title, onClick: ()=>{}}))}
            />
        })}
    </div>
};

export default TextBookContent;
