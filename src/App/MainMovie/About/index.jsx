import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { Container, AboutTitle, Description, ButtonsContainer, Watch, Info } from './styles'


const About = ({ title, overview }) => {
   return (
      <Container>
         <AboutTitle>{title}</AboutTitle>
         <Description>{overview}</Description>
         <ButtonsContainer>
            <Watch>
               <FaPlay className='icon'/>
               Assistir
            </Watch>
            <Info>
               <AiOutlineInfoCircle className='icon' />
               Mais Informações
            </Info>
         </ButtonsContainer>
      </Container>
   );
}

export default About;