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

                        <div className="Team_box_author">
                        <div className="Team_box_author_wrapper">
                        Климм Иван
<div className="Team_box_author_city">
                                Front-end Developer
                                Витебск, Беларусь
</div>
<div className="Team_box_author_photo_Box">

                            <div className="Team_box_author_photo_ivan photoAuthor">
                            </div>
                            </div>
                            </div>
<div className="Team_box_author_contribution_bottom">
<div className="Team_box_author_contribution">
                            Вклад в разработку: игры: "Саванна", "Аудио-вызов", "Своя Игра"
                        </div>
                        <div className="Team_box_author_mail">
                        
                        <a href="https://github.com/kli2m"><div className="Team_author_git"></div></a>
                        <a href="mailto:kli2m@tut.by"><div className="Team_author_mail"></div></a>
                        </div>
                        </div>
                        </div>
                        <div className="Team_box_author">
                        <div className="Team_box_author_wrapper">
                                               Демчук Татьяна
<div className="Team_box_author_city">
                                Developer
                                Брест, Беларусь
</div>
<div className="Team_box_author_photo_Box">

                            <div className="Team_box_author_photo_tanya photoAuthor">
                            </div>
                            </div>
                            </div>
<div className="Team_box_author_contribution_bottom">
<div className="Team_box_author_contribution">
                            Вклад в разработку: страницы учебника и словаря, привязка данных с этих страниц к бэкенду. привязка данных игр к статистике
                        </div>
                        <div className="Team_box_author_mail">
                        <a href="https://github.com/tv-dem"><div className="Team_author_git"></div></a>
                        <a href="mailto:69cobak@mail.ru"><div className="Team_author_mail"></div></a>
                        </div>
                        </div>
                        </div>
                        <div className="Team_box_author">
                        <div className="Team_box_author_wrapper">
                         Литвинов Дмитрий
<div className="Team_box_author_city">
                                Developer
                                Харьков, Украина
</div>
<div className="Team_box_author_photo_Box">

                            <div className="Team_box_author_photo_dima photoAuthor">
                            </div>
                            </div>
                            </div>
<div className="Team_box_author_contribution_bottom">
<div className="Team_box_author_contribution">
                            Вклад в разработку: Бэкэнд.Страницы: 'Login', 'SignIn', 'StatisticPage', 'HomePage'. Реализация методов API / users, API / statistic, API / refreshToken
                        </div>
                        <div className="Team_box_author_mail">
                        
                        <a href="https://github.com/funfordima"><div className="Team_author_git"></div></a>
                        <a href="mailto:d.g.litvinov@gmail.com"><div className="Team_author_mail"></div></a>
                        </div>
                        </div>
                        </div>
                                               <div className="Team_box_author">
                        <div className="Team_box_author_wrapper">
                         Сован Марат
<div className="Team_box_author_city">
                                Front-end Developer
                                Витебск, Беларусь
</div>
<div className="Team_box_author_photo_Box">

                            <div className="Team_box_author_photo_marat photoAuthor">
                            </div>
                            </div>
                            </div>
<div className="Team_box_author_contribution_bottom">

<div className="Team_box_author_contribution">
                            Вклад в разработку: игра "Спринт", главная страница
                        </div>
                        <div className="Team_box_author_mail">
                        
                        <a href="https://github.com/sovanmarat"><div className="Team_author_git"></div></a>
                        <a href="mailto:maratwp@mail.ru"><div className="Team_author_mail"></div></a>
                        </div>
                        </div>

                    </div>
                </div>
                </div>

            </div>
        </div>
    )
}

export default StartPage;