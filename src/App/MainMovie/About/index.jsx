import React from 'react';
import { FaPlay } from 'react-icons/fa';
import { AiOutlineInfoCircle } from 'react-icons/ai';

import { Container, AboutTitle, Description, ButtonsContainer, Watch, Info } from './styles'


const About = () => {
   return (
      <Container>
         <AboutTitle>Nome do filme</AboutTitle>
         <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempore dicta ea blanditiis. Cum, eveniet temporibus doloremque impedit optio, ullam quidem distinctio pariatur mollitia sint dolores? Praesentium, sed iste commodi odit dignissimos reprehenderit neque quidem enim, laboriosam quisquam nihil quibusdam in!</Description>
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