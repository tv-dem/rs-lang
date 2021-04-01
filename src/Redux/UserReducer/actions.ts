import {SET_SETTINGS} from "./actionTypes";

export const setSettings = (translate:boolean, options:boolean) => ({
    type: SET_SETTINGS,
    translate,
    options,
})
