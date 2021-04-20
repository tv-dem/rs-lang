import {
  SET_COUNT,
  UPDATE_WORDS,
  SET_CURRENT_CARD,
  SET_CURRENT_WORD,
  ADD_RIGHT_WORD,
  ADD_WRONG_WORD,
  NULLIFY,
  SET_PENDING,
  SET_LEVEL,
  SET_PAGE,
  SET_BEST_LINE,
  SET_CURRENT_LINE,
  SET_PERCENT,
  SET_IS_CHECK,
  SET_VALUE_HEARTS,
  SET_IS_SOUND,
} from './actionTypes';
import { typeGames } from './typeGames';
import shuffle from '../../utils/shuffle';

const initState: typeGames = {
  pending: false,
  page: 1,
  level: 1,
  currentGame: null,
  count: 0,
  currentWord: null,
  words: null,
  wrong: [],
  right: [],
  bestLine: 0,
  currentLine: 0,
  percent: 100,
  isCheck: false,
  hearts: 0,
  isSound: true,
  cards: [
    {
      name: 'Собери слово',
      nameEn: 'LetterSolver',
      descriptions:
        'Мини-игра «Собери слово» - это тренировка для восприятия и повторения английских слов.',
      howToPlay:
        `Вы видите строку из букв. Необходимо поменять местами буквы, что бы получилось слово. Для игры можно использовать клавиши клавиатуры: Пробел="принять ответ", Ввод = "следующее слово"
        `,
      imageLink:
        'https://cdnimg.rg.ru/img/content/126/01/19/Depositphotos_83563998_l-2015_d_850.jpg',
      imageBackground:
        'https://i.insider.com/58d02e0e7d1fb21d008b47cf?width=700&format=jpeg&auto=webp',
      menuRoute: '/games/LetterSolver',
      titleColor: '#B964D4',
      descriptionColor: '#68237F',
      backgroundColor: '#E9FB00',
    },
    {
      name: 'Спринт',
      nameEn: 'Sprint',
      descriptions:
        'Мини-игра «Спринт» - это тренировка для повторения заученных слов из вашего словаря.',
      howToPlay:
        `После запуска игры вы увидите слово и перевод. Вам нужно выбрать, правильно это или неправильно. Для выбора ответа можете использовать клавиши клавиатуры: стрелка влево = "не верно", стрелка вправо = "верно"`,
      imageLink:
        'https://st2.depositphotos.com/3780601/5800/i/600/depositphotos_58007553-stock-photo-sprintstart-in-track.jpg',
      imageBackground:
        'https://www.macmillandictionaryblog.com/wp-content/uploads/2017/09/sprint-810x541.jpg',

      menuRoute: '/games/Sprint',
      titleColor: '#EB6AA4',
      descriptionColor: '#A1285F',
      backgroundColor: '#bceaa5',
    },
    {
      name: 'Аудиовызов',
      nameEn: 'AudioCall',
      descriptions:
        'Мини-игра «Аудиовызов» - это тренировка, развивающая навыки речи и перевода.',
      howToPlay:
        'Вы слышите слово и видите 5 вариантов перевода. Вам нужно выбрать правильный ответ. Для игры можно использовать клавиши клавиатуры: цифры 1-5 для выбора слова, Пробел="не знаю", Ввод="следующее слово"',
      imageLink:
        'http://lingualeo.com/ru/blog/wp-content/uploads/sites/4/2016/04/trenirovka_audiovyzov.jpg',
      imageBackground:
        'https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/137685473/original/1e493f8e1b3c7f190ddf73e48b3aa2af23017943/translate-audio-or-video-transcription-in-english.jpg',

      menuRoute: '/games/AudioCall',
      titleColor: '#BEF56E',
      descriptionColor: '#7AB02C',
      backgroundColor: '#8B003F',
    },
    {
      name: 'Саванна',
      nameEn: 'Savanna',
      descriptions:
        'Мини-игра «Саванна» - это тренировка по переводу пассивного изученного словаря в активную стадию.',
      howToPlay:
        'После запуска игры вы увидите падающее слово на английском. Вам нужно выбрать правильный ответ. Для игры можно использовать клавиши клавиатуры: цифры 1-4 для выбора слова.',
      imageLink:
        'http://www.fotooboi.ru/upload/resize_cache/iblock/682/2000_565_1d7a58ff99b324185ccb5ad5dfbdb5e85/6827c27f54f0854148af2efe2ba2fb23.jpg',
      imageBackground:
        'https://wetu.com/ImageHandler/w1920x1080/14840/elephant-1_preview.jpeg2.jpg',

      menuRoute: '/games/Savanna',
      titleColor: '#F3FD72',
      descriptionColor: '#B2BC2F',
      backgroundColor: '#54026E',
    },
  ],
};

const GamesReducer = (state = initState, action: any) => {
  switch (action.type) {
    case SET_COUNT:
      return { ...state, count: action.count };
    case UPDATE_WORDS:
      return { ...state, words: shuffle(action.words) };

    case NULLIFY:
      return {
        ...state,
        words: null,
        wrong: [],
        right: [],
        percent: 100,
        isCheck: false,
        count: 0,
        currentWord: null,
        currentLine: 0,
        bestLine: 0,
        page: 0,
      };

    case SET_CURRENT_CARD:
      return {
        ...state,
        currentGame: state.cards.find(
          game => game.menuRoute === action.pathRoute,
        ),
      };
    case SET_CURRENT_WORD:
      return {
        ...state,
        currentWord: {
          ...action.word,
          letters: shuffle(action.word.word.split('')),
        },
      };
    case ADD_RIGHT_WORD:
      return {
        ...state,
        right: state.right.concat(action.word),
      };
    case ADD_WRONG_WORD:
      return {
        ...state,
        wrong: state.wrong.concat(action.word),
      };
    case SET_PENDING:
      return {
        ...state,
        pending: action.status,
      };
    case SET_LEVEL:
      return {
        ...state,
        level: action.level > 5 ? 0 : action.level,
      };
    case SET_PAGE:
      return {
        ...state,
        page: action.page > 5 ? 0 : action.page,
      };
    case SET_PERCENT:
      return {
        ...state,
        percent: action.percent,
      };
    case SET_IS_CHECK:
      return {
        ...state,
        isCheck: action.isCheck,
      };
    case SET_BEST_LINE:
      return { ...state, bestLine: action.bestLine };
    case SET_CURRENT_LINE:
      return { ...state, currentLine: action.currentLine };
    case SET_VALUE_HEARTS:
      return { ...state, hearts: action.hearts };
    case SET_IS_SOUND:
      return { ...state, isSound: action.isSound };
    default:
      return state;
  }
};

export default GamesReducer;
