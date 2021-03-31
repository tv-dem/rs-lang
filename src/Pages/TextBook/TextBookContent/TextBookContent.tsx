import React, {FC} from 'react';
import './TextBookContent.scss';
import WordItem from "../../../Components/WordItem/WordItem";

const TextBookContent: FC = ({words, options, createUserWord, userId, token,currLevel}: any) => {

    const optionOnClick = (id: string, section:string) => {
        createUserWord(id, userId, section, {}, token);
    }

    return <div className={`text-book__content h${currLevel}`}>
        {words.map(({id, userWord, word, audio, audioMeaning, audioExample, textMeaning, image, textExample, transcription, textExampleTranslate, textMeaningTranslate, wordTranslate}: any, i: number) => {
            return <WordItem
                modificator={userWord ? userWord.difficulty : ''}
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
                options={options.map(({title, section}: any) => ({
                    title,
                    onClick: () => optionOnClick(id, section),
                }))}
            />
        })}
    </div>
};

export default TextBookContent;
