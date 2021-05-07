import { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from './Loader'

const GifFInder = () => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [search, setSearch] = useState("");
    const [random, setRandom] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                setIsLoading(true);
                const results = await axios("http://api.giphy.com/v1/gifs/trending?api_key=g25nBHy2WQJRvUjil4QWVNdHBBEfeYEH")
                console.log(results)
                if (results.status !== 200) {
                    throw new Error("Error!");
                }
                //set the data after we (hopefully) fetch it!
                setData(results.data.data)
                
                //Set loading to false because we've already retrieved the data, so we want to stop the loading animation
                setIsLoading(false);
            } catch (error) {
                if (isError) {
                    setIsError(true);
                    console.log(error);
                }
            }
        };
        fetchData();
    }, [isError]);


    const renderGifs = () => {
        if (isLoading) {
            return <Loader />
        }
        return data.map(img => {
            return (
                <div>
                    <div key={img.id}>
                        <img className="img mt-2" alt="" src={img.images.original.url} />
                    </div>
                </div>
            )
        })
    }


    const handleSearchChange = (event) => {
        setSearch(event.target.value)
    }

    const handleSubmit = async (event) => {
        try {
            setIsLoading(true); // <--- after form submits, page will be loading 
            event.preventDefault(); // <--- This is so the page doesn't reload after submitting the form
            //Dont need fetchData function because we're not in useEffect anymore...
            const results = await axios("https://api.giphy.com/v1/gifs/search?api_key=g25nBHy2WQJRvUjil4QWVNdHBBEfeYEH", {
                params: {
                    q: search
                }
            });
            console.log(results);
            setData(results.data.data)
            setIsLoading(false);
            setRandom([false]);
        } catch (error) {
            setIsError(true);
        }
    }

    const handleRandom = async () => {
        try {
            setIsLoading(true); // <--- after form submits, page will be loading 
            //Dont need fetchData function because we're not in useEffect anymore...
            const result = await axios("https://api.giphy.com/v1/gifs/random?api_key=g25nBHy2WQJRvUjil4QWVNdHBBEfeYEH")
            
            console.log(result);
            setRandom(result.data.data);
            setIsLoading(false);
            setData([]);
        } catch (error) {
            setIsError(true);
            console.log(error);
        }
        
    }

    return <div className="container">
        <form className="my-5">
            <input
                value={search}
                onChange={handleSearchChange}
                type="text"
                placeholder="Search Here!"

            />

            <button onClick={handleSubmit} type="submit" className="ml-2">Search!</button>
        </form>
        <div>
            <button onClick={handleRandom} type="submit" className="ml-2">
                Random 
            </button>
            <br/>
            <img alt="" src={random.image_url}/>
        </div>
        {renderGifs()}
        
    </div>;
}

export default GifFInder