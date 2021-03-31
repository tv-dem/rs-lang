import { CHANGE_COUNT, ADD_WORD, SET_CURRENT_CARD } from "./actionTypes";
import { typeGames } from "./typeGames";

const initState: typeGames = {
  currentGame: null,
  count: 0,
  currentWord: null,
  words: [],
  wrong: [],
  right: [],
  cards: [
    {
      name: "Собери слово",
      descriptions:
        "Мини-игра «Собери слово» - это тренировка для восприятия и повторения английских слов.",
      howToPlay:
        "Вы видите строку из букв. Необходимо поменять местами буквы, что бы получилось слово.",
      imageLink:
        "https://cdnimg.rg.ru/img/content/126/01/19/Depositphotos_83563998_l-2015_d_850.jpg",
      imageBackground:
        "https://thumbs.dreamstime.com/b/%D0%B1%D0%BB%D0%BE%D0%BA-%D0%BF%D0%B8%D1%81%D1%8C%D0%BC%D0%B0-%D0%B2-%D1%81%D0%BB%D0%BE%D0%B2%D0%B5-%D0%BE%D0%B6%D0%B8%D0%B4%D0%B0%D1%8E%D1%89%D0%B5%D0%BC-%D1%80%D0%B5%D1%88%D0%B5%D0%BD%D0%B8%D1%8F-%D1%81-%D0%B4%D1%80%D1%83%D0%B3%D0%B8%D0%BC-%D0%BD%D0%B0-%D0%BA%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B9-%D0%B4%D0%B5%D1%80%D0%B5%D0%B2%D1%8F%D0%BD%D0%BD%D0%BE%D0%B9-144408371.jpg",
      menuRoute: "/games/LetterSolver",
      textbookRoute: "/games/textbook/LetterSolver/level/page",
      titleColor: "#B964D4",
      descriptionColor: "#68237F",
      backgroundColor: "#E9FB00",
    },
    {
      name: "Спринт",
      descriptions:
        "Мини-игра «Спринт» - это тренировка для повторения заученных слов из вашего словаря.",
      howToPlay:
        "После запуска игры вы увидите слово и перевод. Вам нужно выбрать, правильно это или неправильно.",
      imageLink:
        "https://st2.depositphotos.com/3780601/5800/i/600/depositphotos_58007553-stock-photo-sprintstart-in-track.jpg",
      imageBackground:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fskyeng.ru%2Farticles%2Fanglijskij-alfavit&psig=AOvVaw0NL-__s59V9Ed_J3YdCupe&ust=1616961133704000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCU5uqf0e8CFQAAAAAdAAAAABAu",

      menuRoute: "/games/Sprint",
      textbookRoute: "/games/textbook/Sprint/level/page",
      titleColor: "#EB6AA4",
      descriptionColor: "#A1285F",
      backgroundColor: "#8BEA00",
    },
    {
      name: "Аудиовызов",
      descriptions:
        "Мини-игра «Аудиовызов» - это тренировка, развивающая навыки речи и перевода.",
      howToPlay:
        "Вы слышите слово и видите 5 вариантов перевода. Вам нужно выбрать правильный ответ.",
      imageLink:
        "http://lingualeo.com/ru/blog/wp-content/uploads/sites/4/2016/04/trenirovka_audiovyzov.jpg",
      imageBackground:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fskyeng.ru%2Farticles%2Fanglijskij-alfavit&psig=AOvVaw0NL-__s59V9Ed_J3YdCupe&ust=1616961133704000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCU5uqf0e8CFQAAAAAdAAAAABAu",

      menuRoute: "/games/AudioCall",
      textbookRoute: "/games/textbook/AudioCall/level/page",
      titleColor: "#BEF56E",
      descriptionColor: "#7AB02C",
      backgroundColor: "#8B003F",
    },
    {
      name: "Саванна",
      descriptions:
        "Мини-игра «Саванна» - это тренировка по переводу пассивного изученного словаря в активную стадию.",
      howToPlay:
        "После запуска игры вы увидите падающее слово на английском. Вам нужно выбрать правильный ответ.",
      imageLink:
        "http://www.fotooboi.ru/upload/resize_cache/iblock/682/2000_565_1d7a58ff99b324185ccb5ad5dfbdb5e85/6827c27f54f0854148af2efe2ba2fb23.jpg",
      imageBackground:
        "https://www.google.com/url?sa=i&url=https%3A%2F%2Fskyeng.ru%2Farticles%2Fanglijskij-alfavit&psig=AOvVaw0NL-__s59V9Ed_J3YdCupe&ust=1616961133704000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCLCU5uqf0e8CFQAAAAAdAAAAABAu",

      menuRoute: "/games/Savanna",
      textbookRoute: "/games/textbook/Savanna/level/page",
      titleColor: "#F3FD72",
      descriptionColor: "#B2BC2F",
      backgroundColor: "#54026E",
    },
  ],
};

const GamesReducer = (state = initState, action: any) => {
  switch (action.type) {
    case CHANGE_COUNT:
      return { ...state, count: action.count };
    case ADD_WORD:
      return { ...state, currentWord: action.word };
    case SET_CURRENT_CARD:
      return {
        ...state,
        currentGame: state.cards.find(
          (game) => game.menuRoute === action.pathRoute
        ),
      };
    default:
      return state;
  }
};

export default GamesReducer;
