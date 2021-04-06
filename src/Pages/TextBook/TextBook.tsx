import React, { FC, useEffect, useState } from 'react';
import { Pagination } from 'antd';
import Panel from "../../Components/Panel/Panel";
import './TextBook.scss'
import TextBookContentContainer from "./TextBookContent/TextBookContentContainer";
import {useParams} from "react-router";
import SettingsWordsContainer from "../../Components/SettingsWords/SettingsWordsContainer";
import Loading from "../../Components/Loading/Loading";
import GameButton from "../../Components/gameButton/GameButton";

const TextBook: FC = ({onLoad, pending, onSelectLevel, levels, currPage, onSelectPage, currLevel,userId,token, fetchWords,getAggregatedWords}:any) => {
    const {level, page}:any = useParams();
    useEffect(() => {
        onLoad();
        onSelectPage(page,level);
        getAggregatedWords(userId,currLevel - 1, currPage - 1,token);
        // fetchWords(currLevel - 1, currPage - 1)
    }, [currPage,currLevel])
    return <div className='wrapper'>
        <div className="text-book">
            <SettingsWordsContainer/>
            <Panel panelInfo={levels.map(({title}: any, i:number) => ({
                title,
                onSelect: () => {
                    onSelectLevel(i + 1)
                    onSelectPage(1)
                },
                link: `/textbook/${i+1}/1`
            }))}/>
            {pending ? <Loading/> : <>
                <TextBookContentContainer/>
                <GameButton/>
                <div className="text-book__pagination">
                    <Pagination
                        onChange={(page) => onSelectPage(page, currLevel)}
                        showSizeChanger={false}
                        defaultCurrent={page}
                        pageSize={20}
                        total={600}
                    />
                </div>

            </>}
        </div>
    </div>
};

export default TextBook;
