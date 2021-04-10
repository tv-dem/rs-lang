export interface LongTermStat {
  date: string;
  learnedCards: number;
  learnedWords: number;
};

export interface GetLongTermStat {
  type: string;
  payload: LongTermStat[];
}

export interface SetLongTermStat {
  type: string;
  payload: LongTermStat[];
}

export interface UpdateStatStarted {
  type: string;
  payload: string;
}

export interface UpdateStatFailure {
  type: string;
  payload: string;
}
