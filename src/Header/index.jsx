import React from 'react';
import { Title } from '../Title/styles';
import { Container, HeaderResponsiveContainer } from './styles';

const Header = () => {
   return (
      <Container>
         <HeaderResponsiveContainer>
            <Title>BreninfLix</Title>
         </HeaderResponsiveContainer>
      </Container>
   );
}

export default Header;