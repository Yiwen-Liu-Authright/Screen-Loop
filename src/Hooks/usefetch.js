import { useState, useEffect } from 'react';
import axios from '../axios-list'

const UseFetch = props => {
    // const [type, setType] = useState("");
    const [optionList, setOptionList] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const result = await axios('https://screen-loops.firebaseio.com/initialState/imageList.json');
            setOptionList(result.data);
        }
        fetchData();
    }, [])

    return optionList;
}

export default UseFetch;