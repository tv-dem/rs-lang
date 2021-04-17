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
    // const { longTermStat, gameStatWord, gameStatSprint, gameStatSavanna, gameStatAudio } = json.optional;
    // // @ts-ignore
    // dispatch(setTermStat({
    //   ...json.optional,
    //   longTermStat: JSON.parse(String(longTermStat)),
    //   gameStatWord: JSON.parse(String(gameStatWord)),
    //   gameStatSprint: JSON.parse(String(gameStatSprint)),
    //   gameStatSavanna: JSON.parse(String(gameStatSavanna)),
    //   gameStatAudio: JSON.parse(String(gameStatAudio)),
    // }));
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

export const createUserWord = (userId:string, wordId:string, difficulty:string, optional: Object, token:string) => {
  API.createUserWord(wordId, userId, difficulty, optional, token).then(res => {
    console.log('res', res)
  });
}

export const getStat = (userId: string, token: string) => async (dispatch: any) => {
  dispatch(updateStatStarted());
  try {
    const json = await API.getUserStatistics(userId, token);
    const { longTermStat, gameStatWord, gameStatSprint, gameStatSavanna, gameStatAudio } = json.optional;
    const obj = {
      longTermStat: JSON.parse(String(longTermStat)),
      gameStatWord: JSON.parse(String(gameStatWord)),
      gameStatSprint: JSON.parse(String(gameStatSprint)),
      gameStatSavanna: JSON.parse(String(gameStatSavanna)),
      gameStatAudio: JSON.parse(String(gameStatAudio)),
    }
    const learnedWords = await API.getLearnedWords(userId, token);
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    obj.longTermStat[0].learnedWords = learnedWords[0].totalCount[0].count;
    console.log('ppppppppppppppp', learnedWords, obj)
    dispatch(setTermStat({
      ...json.optional,
      ...obj,
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
