import React, {FC, useEffect} from 'react';
import {Pagination} from 'antd';
import Panel from "../../Components/Panel/Panel";
import DictionaryContentContainer from "./DictionaryContent/DictionaryContentContainer";
import SettingsWordsContainer from "../../Components/SettingsWords/SettingsWordsContainer";
import {useParams} from "react-router";
import Loading from "../../Components/Loading/Loading";
import TextBookContentContainer from "../TextBook/TextBookContent/TextBookContentContainer";
import GameButton from "../../Components/gameButton/GameButton";


const TextBook: FC = ({refreshSection, wordsInSection, pending, refreshPage, refreshLevel, refreshPath, onLoad, sections, currSection, currPage, currLevel, levels, getWords, userId, token}: any) => {
    useEffect(() => {
        onLoad(currSection.title)
    }, [onLoad, currSection])
    console.log('pending', wordsInSection)
    const {section, level, page}: any = useParams();
    useEffect(() => {
        refreshPage(Number(page));
        refreshLevel(Number(level));
        refreshSection(section);
        getWords(userId, section === 'learn' ? ['learn', 'hard'] : [section], Number(level) - 1, Number(page) - 1, token)
    }, [])
    return <div className='wrapper'>
        <div className="text-book">
            <SettingsWordsContainer/>
            <Panel panelInfo={sections.map(({title, section}: any) => {
                return {
                    title,
                    onSelect: () => {
                        refreshSection(section);
                        refreshLevel(1);
                        refreshPage(1);
                        getWords(userId, section === 'learn' ? ['learn', 'hard'] : [section], 0, 0, token)
                    },
                    link: `/dictionary/${section}/1/1`
                }
            })}/>
            <Panel panelInfo={levels.map(({title}: any, i: number) => {
                return {
                    title,
                    onSelect: () => {
                        refreshLevel(i + 1);
                        refreshPage(1);
                        getWords(userId, section === 'learn' ? ['learn', 'hard'] : [section], i, 0, token)
                    },
                    link: `/dictionary/${currSection.section}/${i + 1}/1`
                }
            })}/>

            {pending ? <Loading/> : <>
                {wordsInSection > 0 ? <>
                    <DictionaryContentContainer/>
                    <GameButton/>
                    <div className="text-book__pagination">
                        <Pagination
                            onChange={(page) => {
                                refreshPage(page);
                                getWords(userId, section === 'learn' ? ['learn', 'hard'] : [section], currLevel - 1, page - 1, token)
                                refreshPath(currSection, currLevel, page)
                            }}
                            hideOnSinglePage={true}
                            showSizeChanger={false}
                            pageSize={20}
                            total={wordsInSection}
                            current={currPage}
                        />
                    </div>
                </> : <div className='text-book__no-words'>
                    в данной секции пока нет слов
                </div>}
            </>}
        </div>
    </div>
};

export default TextBook;
