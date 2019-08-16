import { SET_INTERVAL, SET_OPTIONLIST, SET_IMAGELIST, SET_VIDEOLIST, SET_PPTLIST } from './actionTypes';

export const setInterval = newInterval => ({
    type: SET_INTERVAL,
    payload: { newInterval }
});

export const setOptionList = newOptionList => ({
    type: SET_OPTIONLIST,
    payload: { newOptionList }
});

export const setImageList = newImageList => ({
    type: SET_IMAGELIST,
    payload: { newImageList }
});

export const setVideoList = newVideoList => ({
    type: SET_VIDEOLIST,
    payload: { newVideoList }
});

export const setPptList = newPptList => ({
    type: SET_PPTLIST,
    payload: { newPptList }
});