import { SET_COUNT, ADD_WORD, SET_CURRENT_CARD,SET_CURRENT_WORD } from "./actionTypes";
import { typeGames } from "./typeGames";

const initState: typeGames = {
  currentGame: null,
  count: 0,
  currentWord: null,
  words: [{
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
},],
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
        "https://i.insider.com/58d02e0e7d1fb21d008b47cf?width=700&format=jpeg&auto=webp",
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
        "https://www.macmillandictionaryblog.com/wp-content/uploads/2017/09/sprint-810x541.jpg",

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
        "https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/137685473/original/1e493f8e1b3c7f190ddf73e48b3aa2af23017943/translate-audio-or-video-transcription-in-english.jpg",

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
        "https://wetu.com/ImageHandler/w1920x1080/14840/elephant-1_preview.jpeg2.jpg",

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
    case SET_COUNT:
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
      case SET_CURRENT_WORD:
        return {
          ...state,
          currentWord: action.word,
        };
    default:
      return state;
  }
};

export default GamesReducer;
