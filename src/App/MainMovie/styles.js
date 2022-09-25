import styled from "styled-components";

export const Container = styled.section`
   position: relative;
   width: 100%;
   height: 55.4vw;
   background-image: url(${props => props.background});
   background-size: cover;
   color: white;
`;