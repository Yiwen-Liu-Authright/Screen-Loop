import { SET_INTERVAL, SET_OPTIONLIST } from './actionTypes';

export const setInterval = newInterval => ({
    type: SET_INTERVAL,
    payload: { newInterval }
});

export const setOptionList = newOptionList => ({
    type: SET_OPTIONLIST,
    payload: { newOptionList }
});