import styled from "styled-components";

export const Container = styled.div`
   margin-top: 2rem;
`;

export const Title = styled.h2`
   color: white;
   text-transform: capitalize;
`;

export const MoviesList = styled.ul`
   display: flex;
   gap: 1.5vw;
   padding: 1vw 0;
   width: 100%;
   overflow: auto;
   list-style-type: none;
`;

export const Movie = styled.li`
   width: 16vw;
   height: 24vw;
   flex-shrink: 0;

   @media screen and (max-width: 768px){
      width: 20vw;
      height: 30vw;
   }

   @media screen and (max-width: 650px){
      width: 30vw;
      height: 45vw;
   }

   @media screen and (max-width: 360px){
      width: 36vw;
      height: 54vw;
   }
`;

export const MovieImage = styled.img`
   width: 100%;
   height: 100%;
   border: 2px solid var(--secondary-color);
   border-radius: calc(16vw * 0.05);
`;