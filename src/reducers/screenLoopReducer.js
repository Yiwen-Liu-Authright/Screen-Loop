import { SET_INTERVAL, SET_OPTIONLIST } from '../actions/actionTypes';
// Initial states
const initialState = {
    currentInterval: 1,
    //苏大强
    optionList: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFEicmlVjxOcfOE_A0quf9A2EPPiN8QWZkIGG1ZLyU1_KagfMG",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EnskTIdRmctYiQbwUKVvInjUfWPk9p3-OOCu-IutovROIT19",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Am1yp6K7oLi_bcVU72ALVwsG_xF9MJsoH9V0a4IKK-8jksLw",
        "http://cms-bucket.ws.126.net/2019/04/02/6b2f4f2690e744b48deb7ee164faee38.jpeg"],
    //猫片
    // optionList: ["//placekitten.com/1500/500",
    //     "//placekitten.com/4000/3000",
    //     "//placekitten.com/800/1200",
    //     "//placekitten.com/1500/1500"],
};

export default function (state = initialState, action) {
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
        default:
            return state;
    }
}