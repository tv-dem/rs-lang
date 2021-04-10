import {
  GET_LONG_TERM_STAT,
  SET_LONG_TERM_STAT,
  UPDATE_STAT_STARTED,
  UPDATE_STAT_FAILURE,
  SET_INITIAL_STAT,
} from './actionTypes';
import {
  Stat,
  GetTermStat,
  SetTermStat,
  UpdateStatStarted,
  UpdateStatFailure,
} from './interfaces';

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
