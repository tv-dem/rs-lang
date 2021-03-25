import React, {FC, useEffect} from 'react';
import { Pagination } from 'antd';
import Panel from "../../Components/Panel/Panel";
import DictionaryContentContainer from "./DictionaryContent/DictionaryContentContainer";


const panelInfo = [
    {
        title: 'Изучаемые'
    },
    {
        title: 'Сложные'
    },
    {
        title: 'Удаленные'
    },
]


const TextBook: FC = ({onLoad, words}:any) => {
    useEffect(() => onLoad(), [onLoad])
    return <div className='wrapper'>
        <div className="text-book">
            <Panel panelInfo={panelInfo}/>
            <DictionaryContentContainer />
            <div className="text-book__pagination">
                <Pagination
                    // onChange={(page, sizePage) => console.log(page, sizePage)} - сюда передадим коллбэк, который сделает запрос
                    hideOnSinglePage={true}
                    showSizeChanger={false}
                    defaultCurrent={1}
                    pageSize={20}
                    total={600}
                />
            </div>
        </div>
    </div>
};

export default TextBook;
