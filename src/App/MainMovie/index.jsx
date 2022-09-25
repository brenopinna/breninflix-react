import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { ResponsiveContainer } from '../../ResponsiveContainer/styles';
import { Container } from './styles';
import About from './About/index'
import { Shadow } from './Shadow/styles';

const MainMovie = () => {
   const [mainMovie, setMainMovie] = useState({});
   useEffect(() => {
      axios.get(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=506fadb0256c13349acc05dabebf9604&language=pt-BR`)
      .then(({ data }) => {
         const { results } = data;
         const index = Math.floor(Math.random() * results.length);
         const randomMovie = results[index];
         const { title, backdrop_path, overview } = randomMovie;
         const newMainMovie = {
            title: title,
            background: `https://image.tmdb.org/t/p/original${backdrop_path}`,
            overview: overview
         }
         setMainMovie(newMainMovie);
      })
   }, [])

   return (
      <Container background={mainMovie.background}>
         <ResponsiveContainer>
            <About title={mainMovie.title} overview={mainMovie.overview}/>
         </ResponsiveContainer>
         <Shadow />
      </Container>
   );
}

export default MainMovie;