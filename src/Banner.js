import React, { useState, useEffect } from 'react';
import axios from './axios';
import requests from './request';

function Banner() {
    const [movie , setMovie] = useState([]);
    
    useEffect(() => {
        async function fetchData() {
        const request = await axios.get(requests.fetchNeflixOriginals);
        setMovie(
         request.data.results[
             Math.floor(Math.random() * request.data.results.length - 1)
             ]
            );
            return request;
        }
        fetchData();
    }, []);

    console.log(movie);

    return (
        <header className="banner"
         style={{
             backgroundSize: "cover",
             backgroundImage: `url(
                 "https://image.tmdb.org/t/p/original/${movie?.backdrop_path}"
             )`,
             backgroundPostion: "center center",
         }}
        >
         <div className="banner__contents">
          <h1>
            {movie?.title || movie?.name || movie?.original_name}
            <div className="banner__buttons">
                <button className="banner__button">Play</button>
                <button className="banner__button">My List</button>
            </div>
          </h1>
         </div>
        </header>
    )
}

export default Banner;
