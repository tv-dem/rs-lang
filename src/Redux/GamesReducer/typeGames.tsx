export type typeCard = {
  name: string;
  descriptions: string;
  howToPlay: string;
  imageLink: string;
  imageBackground: string;
  menuRoute: string;
  nameEn: string;
  titleColor: string;
  descriptionColor: string;
  backgroundColor: string;
};

export type typeCardObj = {
  card: typeCard;
};

export type typeWord = {
  id: string;
  group: number;
  page: number;
  word: string;
  image: string;
  audio: string;
  audioMeaning: string;
  audioExample: string;
  textMeaning: string;
  textExample: string;
  transcription: string;
  textExampleTranslate: string;
  textMeaningTranslate: string;
  wordTranslate: string;
};

export type typeGames = {
  pending:boolean;
  level: number;
  page: number;
  currentGame: null | number;
  count: number;
  currentWord: null | typeWord;
  words: null | Array<typeWord>;
  wrong: Array<typeWord>;
  right: Array<typeWord>;
  percent:number;
  isCheck:boolean;
  cards: Array<typeCard>;
};
