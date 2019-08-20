import { SET_INTERVAL, SET_OPTIONLIST, SET_IMAGELIST, SET_VIDEOLIST, SET_PPTLIST } from '../actions/actionTypes';
import axios from '../axios-list';
// Initial states
// let initialState = {
//     currentInterval: 1,
//     苏大强
//     optionList: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFEicmlVjxOcfOE_A0quf9A2EPPiN8QWZkIGG1ZLyU1_KagfMG",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6EnskTIdRmctYiQbwUKVvInjUfWPk9p3-OOCu-IutovROIT19",
//         "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4Am1yp6K7oLi_bcVU72ALVwsG_xF9MJsoH9V0a4IKK-8jksLw",
//         "http://cms-bucket.ws.126.net/2019/04/02/6b2f4f2690e744b48deb7ee164faee38.jpeg"],
//     猫片
//     optionList: ["//placekitten.com/1500/500",
//         "//placekitten.com/4000/3000",
//         "//placekitten.com/800/1200",
//         "//placekitten.com/1500/1500"],
//     imageList: [
//         "https://www.w3schools.com/w3css/img_lights.jpg",
//         "https://www.w3schools.com/w3css/img_light.jpg",
//         "https://www.w3schools.com/w3css/img_lghts.jpg"
//     ],
//     videoList: [
//         "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",  
//     ],
//     pptList: [
//         "http://www.pdf995.com/samples/pdf.pdf"
//     ],
//     optionList: ["https://media.w3.org/2010/05/sintel/trailer_hd.mp4"],
// };

// console.log(initialState)

let initialState = {
    currentInterval: 1,
    imageList: [],
    videoList: [],
    pptList: [],
    optionList: [],
}

// axios.get('https://screen-loops.firebaseio.com/initialState.json')
//     .then(response => {
//         initialState.currentInterval = response.data.currentInterval
//         initialState.imageList = response.data.imageList
//         initialState.videoList = response.data.videoList
//         initialState.pptList = response.data.pptList
//         initialState.optionList = response.data.optionList
//     })

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