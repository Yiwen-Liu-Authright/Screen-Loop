import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://screen-loops.firebaseio.com/'
});

export default instance;