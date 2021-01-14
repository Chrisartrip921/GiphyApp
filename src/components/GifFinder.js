import {useEffect, useState} from 'react';
import axios from 'axios';

const GifFInder = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            const results = await axios("http://api.giphy.com/v1/gifs/trending", {
                params: {
                    api_key: "g25nBHy2WQJRvUjil4QWVNdHBBEfeYEH"
                }
            })
            console.log(results)
            setData(results.data.data)
        };
        fetchData();
    }, []);
    return <div>Hello</div>
}

export default GifFInder