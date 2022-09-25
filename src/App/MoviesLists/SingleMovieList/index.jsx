import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Container, Title, MoviesList, Movie, MovieImage } from './styles';

const SingleMovieList = ({ genre }) => {
   const [posters, setPosters] = useState([]);
   const { name, id } = genre;
   useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=506fadb0256c13349acc05dabebf9604&language=pt-BR`)
      .then(({ data }) => {
         const newPosters = data.results.map(movie => {
            return `https://image.tmdb.org/t/p/original${movie.poster_path}`;
         })
         setPosters(newPosters);
      })
   }, [])
   return (
         <Container>
            <Title>{name}</Title>
            <MoviesList>
               {posters.map(poster => <Movie key={poster}><MovieImage src={poster}/></Movie>)}
            </MoviesList>
         
      </Container>
   );
}

export default SingleMovieList;