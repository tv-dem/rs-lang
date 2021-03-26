import React, {FC, useEffect, useState} from 'react';
import { Pagination } from 'antd';
import Panel from "../../Components/Panel/Panel";
import './TextBook.scss'
import TextBookContentContainer from "./TextBookContent/TextBookContentContainer";
import { Drawer, Button } from 'antd';
import GamePreview from "../../Components/GamePreview/GamePreview";
import {useParams} from "react-router";

const TextBook: FC = ({onLoad, onSelectLevel, levels, currPage, onSelectPage, currLevel}:any) => {
    useEffect(() => {
        onLoad();
    }, [onLoad])
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return <div className='wrapper'>
        <div className="text-book">
            <Panel panelInfo={levels.map(({title}: any, i:number) => ({
                title,
                onSelect: () => {
                    onSelectLevel(i + 1)
                    onSelectPage(1)
                },
                link: `/textbook/${i+1}/1`
            }))}/>
            <TextBookContentContainer />
            <div className="button-wrapper">
                <Button type='primary' onClick={showDrawer}>повторить слова</Button>
            </div>
            <Drawer
                title="Повторите слова с помощь. мини-игр!"
                placement="right"
                closable={false}
                onClose={onClose}
                visible={visible}
                width={document.documentElement.clientWidth <= 600 ? '100%' : '500px'}>
                <GamePreview src={'http://www.fotooboi.ru/upload/resize_cache/iblock/682/2000_565_1d7a58ff99b324185ccb5ad5dfbdb5e85/6827c27f54f0854148af2efe2ba2fb23.jpg'} description='Саванна'/>
                <GamePreview src={'https://st2.depositphotos.com/3780601/5800/i/600/depositphotos_58007553-stock-photo-sprintstart-in-track.jpg'} description='Спринт'/>
                <GamePreview src={'http://lingualeo.com/ru/blog/wp-content/uploads/sites/4/2016/04/trenirovka_audiovyzov.jpg'} description='Аудиовызов'/>
                <GamePreview src={'https://cdnimg.rg.ru/img/content/126/01/19/Depositphotos_83563998_l-2015_d_850.jpg'} description='Своя игра'/>
            </Drawer>
            <div className="text-book__pagination">
                <Pagination
                    onChange={(page) => onSelectPage(page, currLevel)}
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
