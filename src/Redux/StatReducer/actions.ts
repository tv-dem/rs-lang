import {
  GET_LONG_TERM_STAT,
  SET_LONG_TERM_STAT,
  UPDATE_STAT_STARTED,
  UPDATE_STAT_FAILURE,
  SET_INITIAL_STAT,
  SET_GAME_STAT,
  UPDATE_GAME_STAT
} from './actionTypes';
import {
  Stat,
  GetTermStat,
  SetTermStat,
  UpdateStatStarted,
  UpdateStatFailure,
} from './interfaces';
import { nanoid } from "nanoid";

export const UpdateGameStat = (gameType: string, stat: any) => {

  return {
    type: UPDATE_GAME_STAT,
    payload: {
      gameType,
      stat
    }
  }
}

export const SetGameStat = (gameType: string, bestLine: number, total: number, correct: number) => {
  return {
    type: SET_GAME_STAT,
    payload: {
      gameType,
      stat: {
        key: nanoid(),
        date: new Date().toLocaleDateString(),
        time: `${new Date().getHours()}-${new Date().getMinutes()}`,
        bestLine,
        total,
        correct
      }
    }
  }
}
//


export const setTermStat = (stat: Stat): SetTermStat => ({
  type: SET_LONG_TERM_STAT,
  payload: stat,
} as const);

export const updateStatStarted = (): UpdateStatStarted => ({
  type: UPDATE_STAT_STARTED,
  payload: '',
} as const);

export const updateStatFailure = (error: string): UpdateStatFailure => ({
  type: UPDATE_STAT_FAILURE,
  payload: error,
} as const);

export const getTermStat = (stat: Stat): GetTermStat => ({
  type: GET_LONG_TERM_STAT,
  payload: stat,
} as const);

export const setInitialStat = (): UpdateStatStarted => ({
  type: SET_INITIAL_STAT,
  payload: '',
} as const);
