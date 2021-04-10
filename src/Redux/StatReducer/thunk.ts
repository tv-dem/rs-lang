import {
  setTermStat,
  updateStatStarted,
  updateStatFailure,
  setInitialStat,
} from './actions';
import { Stat } from './interfaces';
import { changeHeaderTitleAC } from "../HeaderReducer/actions";
import API from '../../API/API';

export const onLoad = () => (dispatch: any) => dispatch(changeHeaderTitleAC('Статистика'));

export const setStat = (userId: string, token: string, body: Stat) => async (dispatch: any) => {
  dispatch(updateStatStarted());

  try {
    const json = await API.setUserStatistics(userId, token, body);
    dispatch(setTermStat(json));
    console.log(json);
  } catch (err) {
    if (err.message === '400') {
      dispatch(updateStatFailure('Bad request'));
    } else if (err.message === '401') {
      dispatch(updateStatFailure('Access token is missing or invalid'));
    } else {
      console.error(`Unhandled rejection, status.code=${err.message}`);
    }
  }
};

export const getStat = (userId: string, token: string) => async (dispatch: any) => {
  dispatch(updateStatStarted());

  try {
    const json = await API.getUserStatistics(userId, token);
    const { longTermStat } = json.optional;
    dispatch(setTermStat({ ...json.optional, longTermStat: JSON.parse(String(longTermStat)) }));
    console.log(json);
  } catch (err) {
    if (err.message === '401') {
      dispatch(updateStatFailure('Access token is missing or invalid'));
    } else if (err.message === '404') {
      dispatch(updateStatFailure('Statistics not found'));
      dispatch(setInitialStat());
    } else {
      console.error(`Unhandled rejection, status.code=${err.message}`);
    }
  }
};
