import { SET_INTERVAL, SET_OPTIONLIST, SET_IMAGELIST, SET_VIDEOLIST, SET_PPTLIST } from '../actions/actionTypes';

let initialState = {
    currentInterval: 1,
    imageList: [],
    videoList: [],
    pptList: [],
    optionList: [],

    selectedOption: undefined,
}

export default function (state = initialState, action) {
    console.log(initialState.imageList);
    
    switch (action.type) {
        case SET_INTERVAL:
            const { newInterval } = action.payload;
            // console.log("Inside set interval reducer");
            return {
                ...state,
                currentInterval: newInterval,
            };
        case SET_OPTIONLIST:
            const { newOptionList } = action.payload;
            // console.log("Inside set option list reducer");
            return {
                ...state,
                optionList: newOptionList,
            }
        case SET_IMAGELIST:
            const { newImageList } = action.payload;
            // console.log("Inside set option list reducer");
            return {
                ...state,
                imageList: newImageList,
            }
        case SET_VIDEOLIST:
            const { newVideoList } = action.payload;
            // console.log("Inside set option list reducer");
            return {
                ...state,
                videoList: newVideoList,
            }
        case SET_PPTLIST:
            const { newPptList } = action.payload;
            // console.log("Inside set option list reducer");
            return {
                ...state,
                pptList: newPptList,
            }
        default:
            return state;
    }
}