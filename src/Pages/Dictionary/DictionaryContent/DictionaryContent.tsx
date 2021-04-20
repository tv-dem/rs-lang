import React, { FC } from 'react';
import './DictionaryContent.scss';
import WordItem from "../../../Components/WordItem/WordItem";

const DictionaryContent: FC = ({words, options,updateUserWord, currLevel, userId,token, currPage}:any) => {
    const onClickHandler = (title:string, id:string) => {
        switch(title){
            case 'восстановить':
                updateUserWord(id, userId, 'learn', ['delete'], {}, token, currLevel-1,currPage-1)
                break;
            default:
                return
        }
    }
    return <div className={`text-book__content h${currLevel}`}>
        {words.map(({_id, userWord, word, audio, audioMeaning, audioExample, textMeaning, image, textExample, transcription, textExampleTranslate, textMeaningTranslate, wordTranslate}: any, i: number) => {
            return <WordItem
                modificator={userWord ? userWord.difficulty : ''}
                audioExample={audioExample}
                audioMeaning={audioMeaning}
                audio={audio}
                image={image}
                key={_id}
                options={options.map((title:any) => ({title, onClick: () => {onClickHandler(title, _id)}}))}
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
