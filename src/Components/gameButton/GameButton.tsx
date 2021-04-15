import {Button, Drawer} from "antd";
import React, {useState} from "react";
import GamePreviewContainer from "../GamePreview/GamePreviewContainer";

const GameButton = ({type, group, page, isTextBook}:any) => {
    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };
    return <>
        <div className="button-wrapper">
            <Button type='primary' onClick={showDrawer}>повторить слова</Button>
        </div>
        <Drawer
            title="Повторяйте слова с помощью мини-игр!"
            placement="right"
            closable={false}
            onClose={onClose}
            visible={visible}
            width={document.documentElement.clientWidth <= 600 ? '100%' : '500px'}>
            <GamePreviewContainer currentGame='Savanna' group={group} page={page} isTextBook={isTextBook} type={type} src={'http://www.fotooboi.ru/upload/resize_cache/iblock/682/2000_565_1d7a58ff99b324185ccb5ad5dfbdb5e85/6827c27f54f0854148af2efe2ba2fb23.jpg'} description='Саванна'/>
            <GamePreviewContainer currentGame='Sprint' group={group} page={page} isTextBook={isTextBook} type={type} src={'https://st2.depositphotos.com/3780601/5800/i/600/depositphotos_58007553-stock-photo-sprintstart-in-track.jpg'} description='Спринт'/>
            <GamePreviewContainer currentGame='AudioCall' group={group} page={page} isTextBook={isTextBook} type={type} src={'http://lingualeo.com/ru/blog/wp-content/uploads/sites/4/2016/04/trenirovka_audiovyzov.jpg'} description='Аудиовызов'/>
            <GamePreviewContainer currentGame='LetterSolver' group={group} page={page} isTextBook={isTextBook} type={type} src={'https://cdnimg.rg.ru/img/content/126/01/19/Depositphotos_83563998_l-2015_d_850.jpg'} description='Своя игра'/>
        </Drawer>
    </>
}

export default GameButton;
