import {
  setTermStat,
  updateStatStarted,
  updateStatFailure,
  setInitialStat,
} from './actions';
import { changeHeaderTitleAC } from "../HeaderReducer/actions";
import API from '../../API/API';

export const onLoad = () => (dispatch: any) => dispatch(changeHeaderTitleAC('Статистика'));

export const setStat = (userId: string, token: string, body: Object) => async (dispatch: any) => {
  dispatch(updateStatStarted());
  try {
    const json = await API.setUserStatistics(userId, token, body);
    const { longTermStat, gameStatWord, gameStatSprint, gameStatSavanna, gameStatAudio } = json.optional;
    // @ts-ignore
    dispatch(setTermStat({
      ...json.optional,
      longTermStat: JSON.parse(String(longTermStat)),
      gameStatWord: JSON.parse(String(gameStatWord)),
      gameStatSprint: JSON.parse(String(gameStatSprint)),
      gameStatSavanna: JSON.parse(String(gameStatSavanna)),
      gameStatAudio: JSON.parse(String(gameStatAudio)),
    }));
  } catch (err) {
    if (err.message === '400') {
      dispatch(updateStatFailure('Bad request'));

      setTimeout(() => {
        dispatch(updateStatFailure(''));
      }, 1000);
    } else if (err.message === '401') {
      dispatch(updateStatFailure('Access token is missing or invalid'));

      setTimeout(() => {
        dispatch(updateStatFailure(''));
      }, 1000);
    } else {
      console.error(`Unhandled rejection, status.code=${err.message}`);
    }
  }
};

export const getStat = (userId: string, token: string) => async (dispatch: any) => {
  dispatch(updateStatStarted());
  try {
    const json = await API.getUserStatistics(userId, token);
    const { longTermStat, gameStatWord, gameStatSprint, gameStatSavanna, gameStatAudio } = json.optional;
    dispatch(setTermStat({
      ...json.optional,
      longTermStat: JSON.parse(String(longTermStat)),
      gameStatWord: JSON.parse(String(gameStatWord)),
      gameStatSprint: JSON.parse(String(gameStatSprint)),
      gameStatSavanna: JSON.parse(String(gameStatSavanna)),
      gameStatAudio: JSON.parse(String(gameStatAudio)),
    }));
  } catch (err) {
    if (err.message === '401') {
      dispatch(updateStatFailure('Access token is missing or invalid'));
    } else if (err.message === '404') {
      dispatch(updateStatFailure('Statistics not found'));
      dispatch(setInitialStat());

      setTimeout(() => {
        dispatch(updateStatFailure(''));
      }, 1000);
    } else {
      console.error(`Unhandled rejection, status.code=${err.message}`);
    }
  }
};
