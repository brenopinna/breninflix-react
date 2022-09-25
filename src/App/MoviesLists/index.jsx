import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ResponsiveContainer } from '../../ResponsiveContainer/styles';
import SingleMovieList from './SingleMovieList'

const MoviesLists = () => {
   const numberOfGenres = 3;
   const [allGenres, setAllGenres] = useState([]);
   const [genres, setGenres] = useState([]);

   const returnNewGenre = (genres, allGenres) => {
      let newGenre;
      while(!newGenre){
         const index = Math.floor(Math.random() * allGenres.length)
         const randomGenre = allGenres[index];
         if(!genres.includes(randomGenre)){
         newGenre = randomGenre;
         break
         }
      }
      return newGenre
   }

   useEffect(() => {
      axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=506fadb0256c13349acc05dabebf9604&language=pt-BR')
      .then(({ data }) => {
         setAllGenres(data.genres)
      })
   }, [])

   if(genres.length < numberOfGenres && allGenres.length > 0){
      const newGenre = returnNewGenre(genres, allGenres)
      setGenres([...genres, newGenre])
   }

   return(
      <ResponsiveContainer>
         {genres.map(genre => <SingleMovieList key={genre.id} genre={genre} />)}
      </ResponsiveContainer>
   )
}

export default MoviesLists;