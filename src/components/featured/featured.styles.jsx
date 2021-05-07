import styled from 'styled-components';



export const FeaturedContainer = styled.div`
max-width: 1350px;
 width: 100%;
 height: 100%;
 display: grid;
 grid-template-columns: 1fr 1fr 1fr 1fr;
 grid-row: 1 / span 2;
 align-items: center;
 justify-content: center;
 @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
}



img {
    width: 100%;
    height: auto;
}
`;