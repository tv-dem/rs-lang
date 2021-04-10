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
  studiedСardNum: { [key: string]: number },
  timeNow: string,
}

export interface GameStat {
  key: string,
  date: string,
  time: string,
  level: number,
  round: number,
  result: number,
}

export interface Stat {
  longTermStat: LongTermStat[],
  shortTermStat: ShortTermStat,
  gameStatWord: GameStat[],
  gameStatSavanna: GameStat[],
  gameStatAudio: GameStat[],
  gameStatSprint: GameStat[],
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
