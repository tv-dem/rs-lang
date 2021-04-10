import React, { useEffect, useRef, useCallback } from 'react';
import { Spin } from 'antd';
import { FireTwoTone } from '@ant-design/icons';
import './Savanna.scss';
import Words from '../Words/Words';
import ModalFinishLevel from '../Modal/ModalFinishLevel';
import ProgressBoxContainer from '../ProgressBox/ProgressBoxContainer';
import rightAudio from '../../../assets/audio/right_answer.mp3';
import wrongAudio from '../../../assets/audio/wrong-answer.mp3';

const Savanna: React.FC = ({
    words,
    count,
    right,
    wrong,
    setCount,
    currentWord,
    setCurrentWord,
    addRightWord,
    addWrongWord,
    pending,
    fetchWords,
    level,
    page,
    isCheck,
    setIsCheck,
    setPercent
}: any) => {
    const audioCallRef = useRef<HTMLDivElement>(null);
    const btnRef = useRef<HTMLDivElement>(null);
    const guessWordRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (words) setCurrentWord(words[count]);
    }, [words]);

    useEffect(() => {
        if (count) {
            setCurrentWord(words[count]);
        }
    }, [count]);

    //   useEffect(() => {
    //     playAudio();
    //   }, [currentWord]);

    //   const playAudio = useCallback(() => {
    //     if (currentWord)
    //       new Audio(
    //         `https://api-rs-lang.herokuapp.com/${currentWord.audio}`,
    //       ).play();
    //   }, [currentWord]);

    useEffect(() => {

        if (isCheck) {
            if (guessWordRef.current) {
                guessWordRef.current.classList.remove('to-zoom-up');
                guessWordRef.current.classList.remove('to-down');
                guessWordRef.current.classList.add('to-up');
            }
        } else {
            if (guessWordRef.current) {
                guessWordRef.current.classList.remove('to-up');
                guessWordRef.current.classList.add('to-down');
            }

            // const time = setTimeout(() => {
            //     if (guessWordRef.current) {
            //         guessWordRef.current.classList.add('to-zoom-up');
            //     }
            //     setTimeout(() => {
            //         onCheck('')
            //     },1000)
                
            // }, 5000)


            // return () => clearTimeout(time)

        }
    }, [isCheck]);


    useEffect(() => {
        if (pending) {
            setTimeout(() => {
                if (guessWordRef.current) {
                guessWordRef.current.classList.remove('to-zoom-up');
                    guessWordRef.current.classList.remove('to-up');
                    guessWordRef.current.classList.add('to-down');
                }
            }, 1000)

        }
    }, [pending])



    const toWin = () => {
        // if (btnRef.current) {
        //   btnRef.current.childNodes.forEach((el: any) => {
        //     el.classList.add('audioCall_no-active');
        //     if (el.firstChild.innerHTML === currentWord.wordTranslate)
        //       el.classList.add('audioCall_is-selected-win');
        //   });
        // }

        new Audio(rightAudio).play();
        addRightWord(currentWord);
    };

    const toLost = () => {
        // if (btnRef.current) {
        //   btnRef.current.childNodes.forEach((el: any) => {
        //     el.classList.add('audioCall_no-active');
        //     if (el.firstChild.innerHTML === currentWord.wordTranslate)
        //       el.classList.add('audioCall_is-selected-lose');
        //   });
        // }

        new Audio(wrongAudio).play();
        addWrongWord(currentWord);
    };

     function onCheck (word: any)  {
        if (word.length > 1 && word.word === currentWord.word) {
            toWin();
        } else {
            toLost();
        }
        setIsCheck(true);
        setTimeout(() => {
            onHandleClickBtnNext()

        }, 1000)
    };

    const onOk = () => {
        fetchWords(level, page + 1);
    };

    const onCancel = () => {
        fetchWords(level, page);
    };


    const onHandleClickBtnNext = () => {
        if (count < words.length - 1) {
            setCount(count + 1);
        } else {
            ModalFinishLevel({ right, wrong, onOk, onCancel });
        }
        setPercent(100);
        setIsCheck(false);
    };

    return (
        <div className="savanna__wrapper">
            <div className="savanna">
                {!pending && currentWord ? (
                    <>

                        <div className="savanna__view-box">
                            <div className="savanna__view-box_view word-to-guess">
                                <div className="word-to-guess_transition" ref={guessWordRef} >
                                    {currentWord.word}
                                </div>
                            </div>
                            <Words
                                words={words}
                                currentWord={currentWord}
                                onCheck={onCheck}
                                btnRef={btnRef}
                                numOfWords={Number(3)}
                            />
                            <div className="savanna__view-box_view-crystal">
                            <FireTwoTone />
            </div>
                        </div>
                        <ProgressBoxContainer
                  seconds={Number(5)}               
                  isCheck={isCheck}
                  onCheck={onCheck}
                />
                    </>
                ) : (
                    <Spin tip="Loading..." size="large" />
                )}
            </div>
        </div>
    );
};

export default Savanna;
