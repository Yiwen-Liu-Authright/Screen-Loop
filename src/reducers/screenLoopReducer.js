import { SET_INTERVAL, SET_OPTIONLIST, SET_IMAGELIST, SET_VIDEOLIST, SET_PPTLIST } from '../actions/actionTypes';

// Initial states
const initialState = {
    currentInterval: 1,
    imageList: ["http://static.runoob.com/images/demo/demo1.jpg",
        "http://static.runoob.com/images/demo/demo2.jpg",
        "http://static.runoob.com/images/demo/demo3.jpg",
        "http://static.runoob.com/images/demo/demo4.jpg"],
    videoList: ["https://media.w3.org/2010/05/sintel/trailer_hd.mp4",],
    pptList: ["http://www.pdf995.com/samples/pdf.pdf"],
    optionList: [],
    imageHolder: 'https://i.ytimg.com/vi/L1tx-wAI6Nw/maxresdefault.jpg',
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