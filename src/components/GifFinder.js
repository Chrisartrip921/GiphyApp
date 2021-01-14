import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader'

const GifFInder = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const results = await axios("http://api.giphy.com/v1/gifs/trending", {
                    params: {
                        api_key: "g25nBHy2WQJRvUjil4QWVNdHBBEfeYEH",
                        
                    }
                });
                console.log(results)
                if(results.status !== 200) {
                    throw new Error("Error!");
                }
                //set the data after we (hopegully) fetch it!
                setData(results.data.data)
                //Set loading to false because we've already retrieved the data, so we want to stop the loading animation
                setIsLoading(false);
            } catch (error) {
                if(isError){
                    setIsError(true);
                    console.log(error);
                }
            }
        };
        fetchData();
    }, [], isError);


    const renderGifs = () => {
        if(isLoading) {
            return <Loader />
        }
        return data.map(el => {
            return (
                <div key={el.id}>
                    <img alt="" src={el.images.original.url} />
                </div>
            )
        })
    }
    renderGifs();
    return <div>{renderGifs()}</div>;
}

export default GifFInder