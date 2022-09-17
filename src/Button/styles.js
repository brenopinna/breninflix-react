import styled from "styled-components";

export const Button = styled.button`
   cursor: pointer;
   display: flex;
   align-items: center;
   gap: 0.6rem;
   padding: 0.6rem 1.5rem;
   border-radius: 0.3rem;
   font-family: var(--fonte-padrao);
   font-weight: bold;
   font-size: 1rem;
   border: none;
   outline: none;

   & .icon{
      font-size: 1.4rem;
   }
`;