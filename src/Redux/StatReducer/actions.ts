import {
  GET_LONG_TERM_STAT,
  SET_LONG_TERM_STAT,
  UPDATE_STAT_STARTED,
  UPDATE_STAT_FAILURE,
} from './actionTypes';
import {
  LongTermStat,
  GetLongTermStat,
  SetLongTermStat,
  UpdateStatStarted,
  UpdateStatFailure,
} from './interfaces';

export const setLongTermStat = (stat: LongTermStat[]): SetLongTermStat => ({
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

export const getLongTermStat = (stat: LongTermStat[]): GetLongTermStat => ({
  type: GET_LONG_TERM_STAT,
  payload: stat,
} as const);
