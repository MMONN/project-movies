import React, { useState, createContext, useEffect } from "react";
import axios from 'axios';

export const MovieContext = createContext(null);

export default function MovieProvider({ children }) {

  const [movies, setMovies] = useState([]);
  const [showMovies, setShowMovies] = useState([]);
  const [cart, setCart] = useState([]);

  const fetchData = () => {
    axios.get('https://api.themoviedb.org/3/search/movie?api_key=0b542f4b6a4be7d4910b50b187b2f93b&query=a')
      .then(res => {
        const response = res.data.results;
        let data = response.map((item) => {
          return {
            adult: item.adult,
            backdrop_path: item.backdrop_path,
            genre_ids: item.genre_ids,
            id: item.id,
            original_language: item.original_language,
            original_title: item.original_title,
            overview: item.overview,
            popularity: item.popularity,
            poster_path: item.poster_path,
            release_date: item.release_date,
            title: item.title,
            video: item.video,
            vote_average: item.vote_average,
            vote_count: item.vote_count,
            price: 9.5
          }
        })
        setMovies(data)
        setShowMovies(data)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  const movieData = {
     movies,cart,showMovies,setMovies,setShowMovies,setCart
  };


  return (
    <MovieContext.Provider value={movieData}>
      {children}
    </MovieContext.Provider>
  );
}
