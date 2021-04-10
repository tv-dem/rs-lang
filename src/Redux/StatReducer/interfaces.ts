export interface LongTermStat {
  date: string;
  learnedCards: number;
  learnedWords: number;
};

export interface ShortTermStat {
  bestSeries: number,
  cardsCount: number,
  cardsLeft: number,
  correctAnswers: number,
  currentCardNum: number,
  currentSeries: number,
  errorAnswers: number,
  newWordsCount: number,
  studiedСardNum: number,
  timeNow: string,
}

export interface Stat {
  longTermStat: LongTermStat[],
  shortTermStat: ShortTermStat,
}

export interface GetTermStat {
  type: string;
  payload: Stat;
}

export interface SetTermStat {
  type: string;
  payload: Stat;
}

export interface UpdateStatStarted {
  type: string;
  payload: string;
}

export interface UpdateStatFailure {
  type: string;
  payload: string;
}
