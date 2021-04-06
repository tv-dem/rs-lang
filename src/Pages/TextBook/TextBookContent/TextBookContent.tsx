import React, { FC } from 'react';
import './TextBookContent.scss';
import WordItem from "../../../Components/WordItem/WordItem";

const TextBookContent: FC = ({words, options, createUserWord,updateUserWord, userId, token,currLevel,currPage}: any) => {

    const optionOnClick = (userWord:any, id: string, section:string) => {
        if(userWord){
            updateUserWord(id, userId, section, {}, token,currLevel-1,currPage-1)
        } else{
            createUserWord(id, userId, section, {}, token,currLevel-1,currPage-1);
        }
    }

    return <div className={`text-book__content h${currLevel}`}>
        {words.filter(({userWord}:any) => userWord ? userWord.difficulty !== 'delete' : true)
            .map(({id, _id, userWord, word, audio, audioMeaning, audioExample, textMeaning, image, textExample, transcription, textExampleTranslate, textMeaningTranslate, wordTranslate}: any, i: number) => {
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
                options={!_id ? null : options.map(({title, section}: any) => {
                    if(userWord){
                        if(userWord.difficulty === section){
                            return {};
                        }
                    }
                    return {
                    title,
                    onClick: () => optionOnClick(userWord,_id, section),
                }})}
            />
        })}
  </div>
};

export default TextBookContent;
