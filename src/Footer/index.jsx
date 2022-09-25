import React from 'react';
import { Container, FooterResponsiveContainer, Link, Tmdb, TmdbLogo, TmdbText } from './styles';

import TmdbImage from '../assets/tmdb-logo.svg'

const Footer = () => {
   return (
      <Container>
         <FooterResponsiveContainer>
            <p>Desenvolvido por
               <Link
                  href="https://github.com/brenopinna"
                  rel="external noreferrer"
                  target="_blank"
               > Breno Pinna</Link>
            </p>
            <Tmdb>
               <TmdbLogo src={TmdbImage} />
               <TmdbText>This product uses the TMDB API but is not endorsed or certified by TMDB.</TmdbText>
            </Tmdb>
         </FooterResponsiveContainer>
      </Container>
   );
}

export default Footer;