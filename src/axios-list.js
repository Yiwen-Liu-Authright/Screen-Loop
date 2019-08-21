import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://screen-loops.firebaseio.com/'
});

export default instance;