import { LongTermStat } from './interfaces';
import {
  GET_LONG_TERM_STAT,
  SET_LONG_TERM_STAT,
  UPDATE_STAT_STARTED,
  UPDATE_STAT_FAILURE, UPDATE_GAME_STAT, SET_GAME_STAT,
} from './actionTypes';
import * as actions from './actions';

const initialState = {
  isLoadStat: false,
  stat: {
    longTermStat: [
      {
        date: new Date().toLocaleDateString(),
        learnedCards: 0,
        learnedWords: 0,
      }
    ] as LongTermStat[],
    shortTermStat: {
      bestSeries: 0,
      cardsCount: 0,
      cardsLeft: 0,
      correctAnswers: 0,
      currentCardNum: 0,
      currentSeries: 0,
      errorAnswers: 0,
      newWordsCount: 0,
      studiedСardNum: { '9-00': 0 },
      timeNow: `${new Date().getHours()}`,
    },
    gameStatWord: [],
    gameStatSavanna: [],
    gameStatAudio: [],
    gameStatSprint: [],
  },
  errorStat: '',
};

type InferValueTypes<T> = T extends { [key: string]: infer U } ? U : never;

type ActionTypes = ReturnType<InferValueTypes<typeof actions>>;

const statReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case UPDATE_STAT_STARTED: {
      return {
        ...state,
        isLoadStat: true,
        errorStat: '',
      };
    }

    case UPDATE_STAT_FAILURE: {
      return {
        ...state,
        isLoadStat: false,
        errorStat: action.payload,
      };
    }

    case SET_LONG_TERM_STAT: {
      return {
        ...state,
        stat: action.payload,
        isLoadStat: false,
        errorStat: '',
      };
    }

    case GET_LONG_TERM_STAT: {
      debugger;
      return {
        ...state,
        stat: action.payload,
        isLoadStat: false,
        errorStat: '',
      };
    }

    case SET_GAME_STAT: {
      debugger;
      // @ts-ignore
      const { gameType, stat } = action.payload;

      console.log('statist', stat);
      // @ts-ignore
      const arr = state.stat[gameType].slice();
      console.log(arr);
      arr.push(stat);
      return {
        ...state,
        stat: {
          ...state.stat,
          // @ts-ignore
          [gameType]: arr,
        }
      }
    }

    case UPDATE_GAME_STAT: {
      // @ts-ignore
      const { gameType, stat } = action.payload;
      console.log('reducer', stat);
      return {
        ...state,
        stat: {
          ...state.stat,
          // @ts-ignore
          [gameType]: stat,
        }
      }
    }

    default: {
      return {
        ...state
      };
    }
  }
};

export default statReducer;
