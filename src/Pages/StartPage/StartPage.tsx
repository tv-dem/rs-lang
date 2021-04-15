import React from 'react';
import './StartPage.scss';

const StartPage: React.FC = () => {



    return (
        <div className="Wrapper__StartPage">
            <div className="StartPage__content">
                <div className="StartPage__content_Box">
                    <div className="StartPage__content_words">
                        Ты расширишь свой словарный запас на 4000 слов, используя современную методику обучения.
    </div>
                    <div className="StartPage__content_title">
                        Изучи английский язык не выходя из дома!
    </div>

                </div>
                <div className="StartPage__content_Box">

                    <div className="StartPage__content_words_games">
                        Повторение и изучение слов в игровой форме.
    </div>
                    <div className="StartPage__content_words_free">
                        Бесплатный доступ. Наша миссия — сделать обучения языкам доступным для каждого.
    </div>
                </div>

                <div className="Team_box_wrapper">
                    <div className="Team_box_title">
                        Над проектом работали:
    </div>
                    <div className="Team_box">

                        <div className="Team_box_author">Климм Иван
<div className="Team_box_author_city">
                                Front-end Developer
                                Витебск, Беларусь
</div>
<div className="Team_box_author_photo_Box">

                            <div className="Team_box_author_photo">
                            </div>
                            </div>

                        </div>
                        <div className="Team_box_author">Sovan Marat</div>
                        <div className="Team_box_author">Litvinov Dmitrij</div>
                        <div className="Team_box_author">Tatyana</div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default StartPage;