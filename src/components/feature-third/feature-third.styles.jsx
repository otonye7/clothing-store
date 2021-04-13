import styled from 'styled-components';
import NewBalance from '../../assets/air-zoom.jpg';


export const FeaturedContainer = styled.div` 
   width: 24.5%;
    max-width: 1200px;
   height: 12rem;
   @media screen and (max-width: 767px){
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
}


   .third-image {
    width: 100%;
    height: 100%;
    background-image: url(${NewBalance});
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 767px){
      width: 100%;
      height: 18rem;
}
   }
`;