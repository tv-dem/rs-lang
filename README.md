# RS lang

RS lang - приложение для изучения английского языка.


## Оглавление
 1. [Установка и запуск](#setup)
 
 2. [Демо](#demo)
 3. [Описание приложения](#description)
 4. [Используемые технологии](#tech)
 5. [Авторы](#contributors)
 6. [Организация командной работы](#org)

## <a name="setup">Установка и запуск</a>

1. Install Node.js
2. Fork this repository: rs-lang
3. Clone your newly created repo: https://github.com/<%your_github_username%>/rs-lang/
4. Go to folder rs-lang
5. Switch branch to 'develop'
6. To install all dependencies use npm install
7. To start app use npm run build (production mode) or npm run dev (development mode)

**[к оглавлению](#Оглавление)**

## <a name="demo">Демо</a>

[Демо-версия приложения](https://funfordima-rs-lang.netlify.app/)

![](https://cdn1.savepice.ru/uploads/2021/4/16/661d5237f1e8762b721e0d60c6f2a54d-full.jpg)

## <a name="description">Описание приложения</a>

можно ознакомиться [здесь](https://youtu.be/a8zj_fokeD4)

### Главная страница приложения
  - выполняет функцию промо-страницы, её оформление определяет первое впечатление о приложении
  - главная страница приложения содержит:
    - меню с навигацией по учебнику, ссылками на мини-игры и статистику. Меню или иконка меню отображается на всех страницах приложения
    - описание возможностей и преимуществ приложения
    - небольшое (5-7 минут) видео с демонстрацией работы приложения
    - раздел "О команде" с фото и ссылками на гитхабы всех участников команды, описанием вклада в разработку приложения каждого из них. При желании данный раздел можно вынести в отдельную страницу
    - footer со ссылками на гитхабы авторов приложения, год создания приложения, [логотип курса](https://rs.school/images/rs_school_js.svg) со [ссылкой на курс](https://rs.school/react/). footer отображается на всех страницах приложения за исключением мини-игр.
### Электронный учебник
  - электронный учебник состоит из шести разделов, которым соответствуют шесть групп слов коллекции исходных данных. В каждом разделе 30 страниц. На каждой странице выводится:
    - меню или иконка меню
    - иконка настроек
    - список из 20 слов
    - ссылки на мини-игры "Саванна", "Аудиовызов", "Спринт", "Своя игра" для повторения изученных слов
    - навигация по страницам со стрелками для перехода к следующей и предыдущей страницам и номером текущей страницы
    - также необходимо продумать навигацию по шести разделам учебника и предусмотреть небольшие различия в  оформлении каждого раздела. Например, можно использовать для каждого раздела индикатор определённого цвета    
    - при перезагрузке страницы открывается последняя открытая страница приложения
- #### Настройки
  - в настройках учебника у пользователя есть возможность указать:
    -  нужно ли отображать в списке слов перевод изучаемого слова и перевод предложений с ним 
    -  нужно ли отображать возле каждого слова кнопки, при клике по которым данное слово добавляется в раздел словаря "Сложные слова" или "Удалённые слова" 
- #### Список слов
  - для каждого слова отображается:
    - само слово, его транскрипция, его перевод
    - предложение с объяснением значения изучаемого слова, его перевод
    - предложение с примером использования изучаемого слова, его перевод
    - картинка-ассоциация к изучаемому слову
    - иконка аудио при клике по которой последовательно звучит произношение изучаемого слова, произношение предложения с объяснением его значения, произношение предложения с примером его использования
    - кнопки, при клике по которым изучаемое слово добавляется в разделы словаря "Сложные слова" или "Удалённые слова"
    - если слово добавлено в раздел словаря "Сложные слова", оно остаётся на странице учебника, и его стиль изменяется или возле него выводится индикатор, указывающий, что оно относится к сложным словам
    - если слово добавлено в раздел словаря "Удалённые слова", оно удаляется со страницы учебника. Если пользователь удалит со страницы все слова, страница удаляется
- #### Словарь
  - словарь является частью учебника. В словаре есть разделы "Изучаемые слова", "Сложные слова", "Удалённые слова"
    - в раздел "Изучаемые слова" попадают слова, которые были задействованы в мини-играх, если мини-игры открывались кликом по ссылке на странице учебника или на странице раздела словаря "Сложные слова". Также в раздел "Изучаемые слова" попадают слова, которые пользователь отметил как сложные. Возле сложных слов есть индикатор или они выделены стилем, так же, как и на странице учебника
    - возле каждого слова в разделе "Изучаемые слова"  указывается результат изучения - сколько раз слово было правильно угадано в мини-играх, сколько раз пользователь ошибался
    - для каждого раздела и каждой страницы учебника указывается количество изучаемых слов и общий результат их изучения
    - в разделы словаря "Сложные слова" и "Удалённые слова" слова попадают, если пользователь кликнул по соответствующим кнопкам возле слов на страницах учебника
    - страницы разделов словаря "Сложные слова" и "Удалённые слова" выглядят точно так же, как страницы учебника:  формируются страницы, на каждой из которых список из 20 слов, создаётся новая страница, на страницах есть ссылки на мини-игры для повторения слов. Слова из разных разделов учебника попадают на разные страницы, на странице есть индикатор, указывающий, к какому разделу учебника она относитеся. Если слов больше 20, создаётся новая страница. Единственное отличие в списке слов вместо кнопок, при клике по которым изучаемое слово добавляется в разделы словаря "Сложные слова" или "Удалённые слова", в словаре возле слова отображается кнопка "Восстановить", которая удаляет слово из словаря и восстанавливает его на странице электронного учебника
### Мини-игры "Саванна", "Аудиовызов", "Спринт", "Собери слово"
- если мини-игра открывается по ссылке в меню, в ней есть возможность выбрать один из шести уровней сложности. Уровень сложности мини-игры определяет раздел учебника, слова из которого в ней будут использоваться
- слова, которые использовались в мини-играх, открытых по ссылке на странице учебника или на странице раздела словаря "Сложные слова", попадают в раздел словаря "Изучаемые слова" 
###  Страница статистики
- на странице статистики отображается краткосрочная статистика по результатам каждого дня.

**[к оглавлению](#Оглавление)**

## <a name="tech">Используемые технологии</a>

Список используемых технологий в проекте

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Redux](https://redux.js.org/basics/usage-with-react)
- [Ant Design of React](https://ant.design/docs/react/introduce)
- [react-router](https://reactrouter.com/web/guides/quick-start)
- [redux-thunk](https://www.npmjs.com/package/redux-thunk)
- [Sass](https://sass-scss.ru/)
- [Webpack](https://webpack.js.org/)
- [chartjs](https://www.chartjs.org/)
- [nanoid](https://www.npmjs.com/package/nanoid)

**[к оглавлению](#Оглавление)**

## <a name="contributors">Авторы</a>

 - [Посмотреть авторов](https://github.com/tv-dem/rs-lang/graphs/contributors)

**[к оглавлению](#Оглавление)**

## <a name="org">Организация командной работы</a>

 - [Черновой макет в figma](https://www.figma.com/file/QbOS7vYt4Bj2ENNNJpXH0s/Untitled?node-id=0%3A1&frame-preset-name=Desktop)
 - [trello](https://trello.com/invite/b/jBdmWREU/7ea803541b45ba2e4308410a4f0ef3b4/rs-lang)
 - [RACI matrix](https://docs.google.com/spreadsheets/d/1w11kERSso3bvaZlkU4OuSuXW7p39cryxMP41Xx0j960/edit?usp=sharing)

**[к оглавлению](#Оглавление)**

Copyright (c) 2021 RS React team 1
