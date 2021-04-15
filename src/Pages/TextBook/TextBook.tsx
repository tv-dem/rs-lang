import React, {FC, useEffect, useState} from 'react';
import {Pagination} from 'antd';
import Panel from "../../Components/Panel/Panel";
import './TextBook.scss'
import TextBookContentContainer from "./TextBookContent/TextBookContentContainer";
import {useParams} from "react-router";
import SettingsWordsContainer from "../../Components/SettingsWords/SettingsWordsContainer";
import Loading from "../../Components/Loading/Loading";
import GameButton from "../../Components/gameButton/GameButton";
import DictionaryContentContainer from "../Dictionary/DictionaryContent/DictionaryContentContainer";

const TextBook: FC = ({getWords, wordsInSection, onLoad, pending, onSelectLevel, levels, currPage, onSelectPage, currLevel, userId, token, isAuth, fetchWords}: any) => {
    const {level, page}: any = useParams();
    useEffect(() => {
        onLoad();
        onSelectPage(page, level);
        isAuth ?
          getWords(userId, ['learn', 'hard'], Number(level) - 1, Number(page) - 1, token) :
            fetchWords(currLevel - 1, currPage - 1)
    }, [currPage, currLevel, isAuth])
    return <div className='wrapper'>
        <div className="text-book">
            <SettingsWordsContainer/>
            <Panel panelInfo={levels.map(({title}: any, i: number) => ({
                title,
                onSelect: () => {
                    onSelectLevel(i + 1)
                    onSelectPage(1)
                },
                link: `/textbook/${i + 1}/1`
            }))}/>
            {pending ? <Loading/> : <>
                <TextBookContentContainer/>
                <GameButton type={['learn', 'hard']} isTextBook={true} page={currPage-1} group={currLevel-1}/>
                <div className="text-book__pagination">
                    <Pagination
                        onChange={(page) => onSelectPage(page, currLevel)}
                        showSizeChanger={false}
                        defaultCurrent={page}
                        pageSize={20}
                        total={wordsInSection}
                    />
                </div>

            </>}
        </div>
    </div>
};

export default TextBook;
