import { CHANGE_COUNT, ADD_WORD } from "./actionTypes";

const initState = {
  count: 0,
  currentWord: {},
  words: [],
  wrong: [],
  right: [],
  cards: [
    {
      name: "Собери слово",
      descriptions: "Мини-игра «Собери слово» - это тренировка для развития памяти.",
      howToPlay:"Вы видите строку из букв. Необходимо поменять местами буквы, что бы получилось слово.",
      imageLink:
        "https://cdnimg.rg.ru/img/content/126/01/19/Depositphotos_83563998_l-2015_d_850.jpg",
      menuRoute: "/games/LetterSolved",
      textbookRoute: "/games/textbook/LetterSolved/level/page",
      titleColor:"#B964D4",
      descriptionColor:"#68237F",
      backgroundColor:"#E9FB00",
    },
    {
      name: "Спринт",
      descriptions: "Мини-игра «Спринт» - это тренировка для повторения заученных слов из вашего словаря.",
      howToPlay:"После запуска игры вы увидите слово и перевод. Вам нужно выбрать, правильно это или неправильно.",
      imageLink:
        "https://st2.depositphotos.com/3780601/5800/i/600/depositphotos_58007553-stock-photo-sprintstart-in-track.jpg",
      menuRoute: "/games/Sprint",
      textbookRoute: "/games/textbook/Sprint/level/page",
      titleColor:"#EB6AA4",
      descriptionColor:"#A1285F",
      backgroundColor:"#8BEA00",

    },
    {
      name: "Аудиовызов",
      descriptions: "Мини-игра «Аудиовызов» - это тренировка, развивающая навыки речи и перевода.",
      howToPlay:"Вы слышите слово и видите 5 вариантов перевода. Вам нужно выбрать правильный ответ.",
      imageLink:
        "http://lingualeo.com/ru/blog/wp-content/uploads/sites/4/2016/04/trenirovka_audiovyzov.jpg",
      menuRoute: "/games/AudioCall",
      textbookRoute: "/games/textbook/AudioCall/level/page",
      titleColor:"#BEF56E",
      descriptionColor:"#7AB02C",
      backgroundColor:"#8B003F",

    },
    {
      name: "Саванна",
      descriptions: "Мини-игра «Саванна» - это тренировка по переводу пассивного изученного словаря в активную стадию.",
      howToPlay:"После запуска игры вы увидите падающее слово на английском. Вам нужно выбрать правильный ответ.",
      imageLink:
        "http://www.fotooboi.ru/upload/resize_cache/iblock/682/2000_565_1d7a58ff99b324185ccb5ad5dfbdb5e85/6827c27f54f0854148af2efe2ba2fb23.jpg",
      menuRoute: "/games/Savanna",
      textbookRoute: "/games/textbook/Savanna/level/page",
      titleColor:"#F3FD72",
      descriptionColor:"#B2BC2F",
      backgroundColor:"#54026E",

    },
  ],
};

const GamesReducer = (state = initState, action: any) => {
    console.log(state)
  switch (action.type) {
    case CHANGE_COUNT:
      return { ...state, count: action.count };
    case ADD_WORD:
      return { ...state, currentWord: action.word };
    default:
      return state;
  }
};

export default GamesReducer;
