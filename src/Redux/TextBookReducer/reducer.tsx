import {CHANGE_LEVEL, CHANGE_PAGE,} from "./actionTypes";

const initState = { // заглушка, изначально будет пустой массив, после запроса обновится
    words:[
        {
            "id": "5e9f5ee35eb9e72bc21af70c",
            "group": 1,
            "page": 1,
            "word": "anxious",
            "image": "files/02_0621.jpg",
            "audio": "files/02_0621.mp3",
            "audioMeaning": "files/02_0621_meaning.mp3",
            "audioExample": "files/02_0621_example.mp3",
            "textMeaning": "<i>Anxious</i> means feeling worried or nervous.",
            "textExample": "She was <b>anxious</b> about not making her appointment on time.",
            "transcription": "[ǽŋkʃəs]",
            "textExampleTranslate": "Она беспокоилась о том, чтобы не договориться о встрече вовремя",
            "textMeaningTranslate": "Тревожно означает чувствовать себя обеспокоенным или нервным",
            "wordTranslate": "озабоченный"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af70d",
            "group": 1,
            "page": 1,
            "word": "awful",
            "image": "files/02_0622.jpg",
            "audio": "files/02_0622.mp3",
            "audioMeaning": "files/02_0622_meaning.mp3",
            "audioExample": "files/02_0622_example.mp3",
            "textMeaning": "An <i>awful</i> thing is very bad.",
            "textExample": "Her performance last night was <b>awful</b>.",
            "transcription": "[ɔ́ːfəl]",
            "textExampleTranslate": "Ее выступление прошлой ночью было ужасным",
            "textMeaningTranslate": "Ужасно очень плохо",
            "wordTranslate": "ужасный"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af70e",
            "group": 1,
            "page": 1,
            "word": "consist",
            "image": "files/02_0623.jpg",
            "audio": "files/02_0623.mp3",
            "audioMeaning": "files/02_0623_meaning.mp3",
            "audioExample": "files/02_0623_example.mp3",
            "textMeaning": "To <i>consist</i> of certain is to be made of parts or things them.",
            "textExample": "Today’s choices for lunch <b>consisted</b> of pizza, hamburgers, and hot dogs.",
            "transcription": "[kənsíst]",
            "textExampleTranslate": "Сегодняшний выбор на обед состоял из пиццы, гамбургеров и хот-догов",
            "textMeaningTranslate": "Быть состоящим из определенного означает быть составленным из частей или вещей из них",
            "wordTranslate": "состоят"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af70f",
            "group": 1,
            "page": 1,
            "word": "desire",
            "image": "files/02_0624.jpg",
            "audio": "files/02_0624.mp3",
            "audioMeaning": "files/02_0624_meaning.mp3",
            "audioExample": "files/02_0624_example.mp3",
            "textMeaning": "To <i>desire</i> is to want something.",
            "textExample": "My sister <b>desires</b> a big house and lots of money.",
            "transcription": "[dizáiər]",
            "textExampleTranslate": "Моя сестра хочет большой дом и много денег",
            "textMeaningTranslate": "Желать - значит хотеть чего-то",
            "wordTranslate": "желание"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af710",
            "group": 1,
            "page": 1,
            "word": "eager",
            "image": "files/02_0625.jpg",
            "audio": "files/02_0625.mp3",
            "audioMeaning": "files/02_0625_meaning.mp3",
            "audioExample": "files/02_0625_example.mp3",
            "textMeaning": "<i>Eager</i> shows excitement about something.",
            "textExample": "The man was <b>eager</b> to talk about the good news.",
            "transcription": "[íːgər]",
            "textExampleTranslate": "Человек стремился говорить о хороших новостях",
            "textMeaningTranslate": "Стремление показывает волнение о чем-то",
            "wordTranslate": "нетерпеливый"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af711",
            "group": 1,
            "page": 1,
            "word": "household",
            "image": "files/02_0626.jpg",
            "audio": "files/02_0626.mp3",
            "audioMeaning": "files/02_0626_meaning.mp3",
            "audioExample": "files/02_0626_example.mp3",
            "textMeaning": "A <i>household</i> is all the people who live in one house.",
            "textExample": "Our <b>household</b> is made up of my father, my mother, and me.",
            "transcription": "[háushòuld]",
            "textExampleTranslate": "Наша семья состоит из моего отца, моей матери и меня",
            "textMeaningTranslate": "Домохозяйство - это все люди, которые живут в одном доме",
            "wordTranslate": "домашнее хозяйство"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af712",
            "group": 1,
            "page": 1,
            "word": "intent",
            "image": "files/02_0627.jpg",
            "audio": "files/02_0627.mp3",
            "audioMeaning": "files/02_0627_meaning.mp3",
            "audioExample": "files/02_0627_example.mp3",
            "textMeaning": "An <i>intent</i> is a plan to do something.",
            "textExample": "Her <b>intent</b> is to visit Italy next summer.",
            "transcription": "[intént]",
            "textExampleTranslate": "Ее намерение - посетить Италию следующим летом",
            "textMeaningTranslate": "Намерение - это план что-то сделать",
            "wordTranslate": "намерение"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af713",
            "group": 1,
            "page": 1,
            "word": "landscape",
            "image": "files/02_0628.jpg",
            "audio": "files/02_0628.mp3",
            "audioMeaning": "files/02_0628_meaning.mp3",
            "audioExample": "files/02_0628_example.mp3",
            "textMeaning": "A <i>landscape</i> is how an area of land looks.",
            "textExample": "The <b>landscape</b> of the country is very green.",
            "transcription": "[lǽndskèip]",
            "textExampleTranslate": "Ландшафт страны очень зеленый",
            "textMeaningTranslate": "Пейзаж - это то, как выглядит участок земли",
            "wordTranslate": "пейзаж"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af714",
            "group": 1,
            "page": 1,
            "word": "lift",
            "image": "files/02_0629.jpg",
            "audio": "files/02_0629.mp3",
            "audioMeaning": "files/02_0629_meaning.mp3",
            "audioExample": "files/02_0629_example.mp3",
            "textMeaning": "To <i>lift</i> something is to move it higher.",
            "textExample": "The man tried to <b>lift</b> the box.",
            "transcription": "[lift]",
            "textExampleTranslate": "Человек пытался поднять коробку",
            "textMeaningTranslate": "Поднять что-то значит поднять это выше",
            "wordTranslate": "лифт"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af716",
            "group": 1,
            "page": 1,
            "word": "lung",
            "image": "files/02_0631.jpg",
            "audio": "files/02_0631.mp3",
            "audioMeaning": "files/02_0631_meaning.mp3",
            "audioExample": "files/02_0631_example.mp3",
            "textMeaning": "A <i>lung</i> is a part of the body that fills with air when breathing.",
            "textExample": "Having strong <b>lungs</b> is necessary for a healthy life.",
            "transcription": "[lʌŋ]",
            "textExampleTranslate": "Наличие крепких легких необходимо для здоровой жизни",
            "textMeaningTranslate": "Легкое - это часть тела, которая при дыхании наполняется воздухом",
            "wordTranslate": "легкое"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af715",
            "group": 1,
            "page": 1,
            "word": "load",
            "image": "files/02_0630.jpg",
            "audio": "files/02_0630.mp3",
            "audioMeaning": "files/02_0630_meaning.mp3",
            "audioExample": "files/02_0630_example.mp3",
            "textMeaning": "To <i>load</i> is to put objects into something.",
            "textExample": "The man <b>loaded</b> the boxes into a truck.",
            "transcription": "[loud]",
            "textExampleTranslate": "Человек загрузил коробки в грузовик",
            "textMeaningTranslate": "Загрузить значит положить объекты во что-то",
            "wordTranslate": "нагрузка"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af717",
            "group": 1,
            "page": 1,
            "word": "motion",
            "image": "files/02_0632.jpg",
            "audio": "files/02_0632.mp3",
            "audioMeaning": "files/02_0632_meaning.mp3",
            "audioExample": "files/02_0632_example.mp3",
            "textMeaning": "A <i>motion</i> is a movement that someone makes.",
            "textExample": "The police officer made a <b>motion</b> with his hand.",
            "transcription": "[móuʃən]",
            "textExampleTranslate": "Полицейский сделал движение рукой",
            "textMeaningTranslate": "Движение - это движение, которое кто-то делает",
            "wordTranslate": "движение"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af718",
            "group": 1,
            "page": 1,
            "word": "pace",
            "image": "files/02_0633.jpg",
            "audio": "files/02_0633.mp3",
            "audioMeaning": "files/02_0633_meaning.mp3",
            "audioExample": "files/02_0633_example.mp3",
            "textMeaning": "The <i>pace</i> of something is the speed at which it happens.",
            "textExample": "I ran the race at a slower <b>pace</b> than my friend.",
            "transcription": "[peis]",
            "textExampleTranslate": "Я провел гонку медленнее, чем мой друг",
            "textMeaningTranslate": "Скорость чего-то - это скорость, с которой это происходит",
            "wordTranslate": "темп"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af719",
            "group": 1,
            "page": 1,
            "word": "polite",
            "image": "files/02_0634.jpg",
            "audio": "files/02_0634.mp3",
            "audioMeaning": "files/02_0634_meaning.mp3",
            "audioExample": "files/02_0634_example.mp3",
            "textMeaning": "<i>Polite</i> shows a thoughtful and kind behavior.",
            "textExample": "The boy was very <b>polite</b>; he behaved very thoughtfully.",
            "transcription": "[pəláit]",
            "textExampleTranslate": "Мальчик был очень вежлив, он вел себя очень вдумчиво",
            "textMeaningTranslate": "Вежливый демонстрирует продуманное и доброе поведение",
            "wordTranslate": "вежливый"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af71b",
            "group": 1,
            "page": 1,
            "word": "possess",
            "image": "files/02_0635.jpg",
            "audio": "files/02_0635.mp3",
            "audioMeaning": "files/02_0635_meaning.mp3",
            "audioExample": "files/02_0635_example.mp3",
            "textMeaning": "To <i>possess</i> something is to have it or own it.",
            "textExample": "My uncle <b>possesses</b> three sheep, a chicken, a cow, and a dog.",
            "transcription": "[pəzés]",
            "textExampleTranslate": "У моего дяди три овцы, курица, корова и собака",
            "textMeaningTranslate": "Иметь что-то - значит иметь это или владеть этим",
            "wordTranslate": "обладают"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af71a",
            "group": 1,
            "page": 1,
            "word": "remark",
            "image": "files/02_0637.jpg",
            "audio": "files/02_0637.mp3",
            "audioMeaning": "files/02_0637_meaning.mp3",
            "audioExample": "files/02_0637_example.mp3",
            "textMeaning": "To <i>remark</i> is to say something.",
            "textExample": "The teacher <b>remarked</b> on how quickly the students were learning.",
            "transcription": "[rimɑ́ːrk]",
            "textExampleTranslate": "Учитель отметил, как быстро учатся студенты",
            "textMeaningTranslate": "Замечать - значит говорить что-то",
            "wordTranslate": "замечание"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af71c",
            "group": 1,
            "page": 1,
            "word": "rapidly",
            "image": "files/02_0636.jpg",
            "audio": "files/02_0636.mp3",
            "audioMeaning": "files/02_0636_meaning.mp3",
            "audioExample": "files/02_0636_example.mp3",
            "textMeaning": "<i>Rapidly</i> means happening very fast.",
            "textExample": "The train moved <b>rapidly</b> on the tracks.",
            "transcription": "[rǽpidli]",
            "textExampleTranslate": "Поезд быстро двигался по рельсам",
            "textMeaningTranslate": "Быстро значит происходить очень быстро",
            "wordTranslate": "быстро"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af71d",
            "group": 1,
            "page": 1,
            "word": "seek",
            "image": "files/02_0638.jpg",
            "audio": "files/02_0638.mp3",
            "audioMeaning": "files/02_0638_meaning.mp3",
            "audioExample": "files/02_0638_example.mp3",
            "textMeaning": "To <i>seek</i> is to look for something.",
            "textExample": "If I have a problem, I <b>seek</b> my sister’s advice.",
            "transcription": "[siːk]",
            "textExampleTranslate": "Если у меня есть проблема, я обращаюсь к совету моей сестры",
            "textMeaningTranslate": "Искать значит искать что-то",
            "wordTranslate": "стремиться"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af71e",
            "group": 1,
            "page": 1,
            "word": "shine",
            "image": "files/02_0639.jpg",
            "audio": "files/02_0639.mp3",
            "audioMeaning": "files/02_0639_meaning.mp3",
            "audioExample": "files/02_0639_example.mp3",
            "textMeaning": "To <i>shine</i> is to make a bright light.",
            "textExample": "The candles are <b>shining</b> in the dark room.",
            "transcription": "[ʃain]",
            "textExampleTranslate": "В темной комнате светятся свечи",
            "textMeaningTranslate": "Светить - это делать яркий свет",
            "wordTranslate": "сияние"
        },
        {
            "id": "5e9f5ee35eb9e72bc21af720",
            "group": 1,
            "page": 1,
            "word": "spill",
            "image": "files/02_0640.jpg",
            "audio": "files/02_0640.mp3",
            "audioMeaning": "files/02_0640_meaning.mp3",
            "audioExample": "files/02_0640_example.mp3",
            "textMeaning": "To <i>spill</i> is to accidentally make something fall out of its container.",
            "textExample": "I <b>spilled</b> the coffee on the table.",
            "transcription": "[spil]",
            "textExampleTranslate": "Я пролил кофе на стол",
            "textMeaningTranslate": "Разлить - это случайно выпустить что-то из контейнера",
            "wordTranslate": "проливать"
        }
    ],
    currPage: 1,
    currLevel: 1,
    levels: [
        {
            title: 'level 1'
        },
        {
            title: 'level 2'
        },
        {
            title: 'level 3'
        },
        {
            title: 'level 4'
        },
        {
            title: 'level 5'
        },
        {
            title: 'level 6'
        },
    ]
}

const TextBookReducer = (state = initState, action:any) => {
    switch(action.type){
        case CHANGE_PAGE:
            console.log(action)
            return {...state, currPage: Number(action.page)}
        case CHANGE_LEVEL:
            console.log(action)
            return {...state, currLevel: Number(action.level)}
        default:
            return state
    }
}


export default TextBookReducer;
