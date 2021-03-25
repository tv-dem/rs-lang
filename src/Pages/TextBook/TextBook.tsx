import React, {FC, useEffect} from 'react';
import { Pagination } from 'antd';
import Panel from "../../Components/Panel/Panel";
import './TextBook.scss'
import TextBookContentContainer from "./TextBookContent/TextBookContentContainer";

const TextBook: FC = ({onLoad, words}:any) => {
    useEffect(() => onLoad(), [onLoad])
    return <div className='wrapper'>
        <div className="text-book">
            <Panel panelInfo={[0,0,0,0,0,0]}/>
            <TextBookContentContainer />
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
