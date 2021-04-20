import API from "../../API/API";
import { fetchError, removePending, setPending, updateWords } from "./actions";

export const getWords = (userId: string, type: Array<string>, group: number, page: number, token: string) => (dispatch: any) => {
  const arr = type.map((t: string) => ({ "userWord.difficulty": t }));
  // @ts-ignore
  arr.push({ "userWord": null })
  const params = { "$or": arr };
  console.log('params', params)
  dispatch(setPending());
  API.getAggregatedWordsByParams(userId, params, group, page, token)
    .then(res => {
      if (res) {
        const { paginatedResults, totalCount } = res[0];
        if (!totalCount[0]) {
          dispatch(updateWords(paginatedResults, 0));
          dispatch(removePending());
          return
        }
        dispatch(updateWords(paginatedResults, totalCount[0].count));
      } else {
        dispatch(updateWords([], 0))
        fetchError('error');
      }
      dispatch(removePending());
    }).catch(e => {
      dispatch(removePending());
    })
}


export const getTextBookWordsTC = (group: number, page: number) => (dispatch: any) => {
  dispatch(setPending())
  API.getWordsByGroupPage(group, page)
    .then(words => {
      console.log('getWordsByGroupPage')
      dispatch(updateWords(words, 600));
      dispatch(removePending())
    })
}


export const createUserWordTC = (wordId: string, userId: string, difficulty: string, optional: Object, token: string, group: number, page: number) => ((dispatch: any) => {
  API.createUserWord(wordId, userId, difficulty, {}, token)
    .then(res => {
      dispatch(getWords(userId, ['learn', 'hard'], group, page, token));
    })
})

export const updateUserWordTC = (wordId: string, userId: string, difficulty: string, optional: Object, token: string, group: number, page: number) => ((dispatch: any) => {
  API.updateUserWord(wordId, userId, difficulty, {}, token)
    .then(res => {
      dispatch(getWords(userId, ['learn', 'hard'], group, page, token));
    })
})
