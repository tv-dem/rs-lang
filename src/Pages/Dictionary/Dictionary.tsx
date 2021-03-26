import React, {FC, useEffect} from 'react';
import { Pagination } from 'antd';
import Panel from "../../Components/Panel/Panel";
import DictionaryContentContainer from "./DictionaryContent/DictionaryContentContainer";


const TextBook: FC = ({onLoad, sections, words, onSelectPage, onSelectSection, currSection, currPage}:any) => {
    useEffect(() => onLoad(), [onLoad])
    return <div className='wrapper'>
        <div className="text-book">
            <Panel panelInfo={sections.map(({title, section}: any) => ({
                title,
                onSelect: () => {
                    onSelectSection(section)
                    onSelectPage(1)
                },
                link: `/dictionary/${section}/1`
            }))}/>
            <DictionaryContentContainer />
            <div className="text-book__pagination">
                <Pagination
                    onChange={(page) => onSelectPage(page, currSection)}
                    hideOnSinglePage={true}
                    showSizeChanger={false}
                    defaultCurrent={currPage}
                    pageSize={20}
                    total={600}
                />
            </div>
        </div>
    </div>
};

export default TextBook;
