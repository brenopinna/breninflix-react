import styled from "styled-components";
import { ResponsiveContainer } from "../ResponsiveContainer/styles";

export const Container = styled.header`
   position: absolute;
   top: 0;
   z-index: 2;
   display: flex;
   align-items: center;
   width: 100%;
   height: 5rem;
   background-image: linear-gradient( to bottom, var(--main-color), transparent );
`;

export const HeaderResponsiveContainer = styled(ResponsiveContainer)`
   display: flex;
   align-items: center;
`;