import styled from "styled-components";
import { ResponsiveContainer } from "../ResponsiveContainer/styles";

export const Container = styled.footer`
   margin-top: 4rem;
   background-color: var(--secondary-color);
   color: white;
   padding: 1rem 0;
`;

export const FooterResponsiveContainer = styled(ResponsiveContainer)`
   display: flex;
   align-items: center;
   justify-content: space-around;
   flex-wrap: wrap;
   gap: 1rem 2rem;
`;

export const Link = styled.a`
   color: white;
   text-decoration: none;
   font-weight: bold;
`;

export const Tmdb = styled.div`
   display: flex;
   align-items: center;
   gap: 1rem;
   max-width: 25rem;
`;

export const TmdbLogo = styled.img`
   height: 2.2rem;
`;

export const TmdbText = styled.p`
   text-align: left;
`;