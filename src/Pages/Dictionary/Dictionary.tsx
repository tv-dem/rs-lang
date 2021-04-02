import React, {FC, useEffect} from 'react';
import {Pagination} from 'antd';
import Panel from "../../Components/Panel/Panel";
import DictionaryContentContainer from "./DictionaryContent/DictionaryContentContainer";
import SettingsWordsContainer from "../../Components/SettingsWords/SettingsWordsContainer";
import {changeDictionarylevelAC, changeDictionaryPageAC, changeSectionAC} from "../../Redux/DictionaryReducer/actions";
import {useParams} from "react-router";


const TextBook: FC = ({refreshSection, refreshPage,refreshLevel, refreshPath,onLoad, sections, words, currSection, currPage, currLevel, levels}: any) => {
    useEffect(() => {
        onLoad(currSection.title)
    }, [onLoad,currSection])
    const {section, level, page}:any = useParams();
    useEffect(() => {
        refreshPage(page);
        refreshLevel(level);
        refreshSection(section);
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
                    },
                    link: `/dictionary/${section}/1/1`
                }
            })}/>
            <Panel panelInfo={levels.map(({title}: any, i:number) => {
                return {
                    title,
                    onSelect: () => {
                        refreshLevel(i+1);
                        refreshPage(1);
                    },
                    link: `/dictionary/${currSection.section}/${i+1}/1`
                }
            })}/>
            <DictionaryContentContainer/>
            <div className="text-book__pagination">
                <Pagination
                    onChange={(page) => {
                        refreshPage(page);
                        refreshPath(currSection, currLevel, page)
                    }}
                    hideOnSinglePage={true}
                    showSizeChanger={false}
                    defaultCurrent={page}
                    pageSize={20}
                    total={600}
                />
            </div>
        </div>
    </div>
};

export default TextBook;
