import React, {useState} from 'react';
import {Popover} from 'antd';
import './WordItem.scss';
import {CustomerServiceOutlined} from "@ant-design/icons";
import {connect} from "react-redux";

const WordItem = ({word,option,translate, audio,audioMeaning,audioExample,textMeaning, textExample, image, transcription, textExampleTranslate, textMeaningTranslate, wordTranslate, options}: any) => {
    const [audios] = useState([
        new Audio('https://api-rs-lang.herokuapp.com/'+audio),
        new Audio('https://api-rs-lang.herokuapp.com/'+audioMeaning),
        new Audio('https://api-rs-lang.herokuapp.com/'+audioExample),
    ])
    return <div className='word-item'>
        <div className="word-item__info">
            <img
                src={'https://api-rs-lang.herokuapp.com/'+image}
                alt='...'
            />
            <CustomerServiceOutlined onClick={()=>{
                audios[0].play();
                audios[0].addEventListener('ended', ()=> audios[1].play());
                audios[1].addEventListener('ended', ()=>audios[2].play());
            }}/>
            <Popover
                content={() => <div>
                    <p>{textMeaning}</p>
                    {translate && <p>{textMeaningTranslate}</p>}
                    <br/>
                    <p>{textExample}</p>
                    {translate && <p>{textExampleTranslate}</p>}
                </div>}
                title={`${word} - ${transcription}`}>
                <div className="words">
                    <span>{word} - {transcription}</span>
                    {translate && <span>{wordTranslate}</span>}
                </div>
            </Popover>
        </div>
        {option && <div className="word-item__setting">
            {options.map(({title, onClick}: any) => <span onClick={onClick}>{title}</span>)}
        </div>}
    </div>
}

const mapStateToProps = ({user}:any) => ({
    option: user.options,
    translate: user.translate,
})

export default connect(mapStateToProps)(WordItem);
