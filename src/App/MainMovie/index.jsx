import React from 'react';
import { ResponsiveContainer } from '../../ResponsiveContainer/styles';
import { Container } from './styles';
import About from './About/index'
import { Shadow } from './Shadow/styles';

const MainMovie = () => {
   return (
      <Container>
         <ResponsiveContainer>
            <About />
         </ResponsiveContainer>
         <Shadow />
      </Container>
   );
}

export default MainMovie;