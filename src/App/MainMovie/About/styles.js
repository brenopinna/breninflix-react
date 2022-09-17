import styled from "styled-components";
import { Title } from "../../../Title/styles";
import { Button } from '../../../Button/styles'

export const Container = styled.div`
   display: flex;
   flex-direction: column;
   gap: 1rem;
   position: absolute;
   z-index: 1;
   bottom: 5rem;

   @media screen and (max-width: 550px){
      bottom: 2rem;
   }
`;

export const AboutTitle = styled(Title)`
   color: white;
   font-size: 3rem;
`;

export const Description = styled.p`
   background-color: var(--secondary-color);
   max-width: 35rem;
   max-height: 7rem;
   padding: 0 0.5rem;
   overflow: auto;
   text-align: justify;

   @media screen and (max-width: 550px){
      display: none;
   }
`;

export const ButtonsContainer = styled.div`
   display: flex;
   gap: 0.7rem;
`;

export const Watch = styled(Button)`
   color: black;
   background-color: white;

   &:hover{
      background-color: rgb(221, 221, 221);
   }
`;

export const Info = styled(Button)`
   color: white;
   background-color: rgba(99, 99, 99, 0.595);

   &:hover{
      background-color: rgba(67, 67, 67, 0.595);
   }
`;