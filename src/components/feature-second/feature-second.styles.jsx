import styled from 'styled-components';
import Gazelle from '../../assets/gazelletwo.jpg';


export const FeaturedContainer = styled.div`
 width: 20%;
   height: 100%;
   display: flex;
   justify-content: space-around;

   @media screen and (max-width: 800px){
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
}

   .second-image {
    width: 100%;
    height: 15rem;
    background-image: url(${Gazelle});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 800px){
      width: 100%;
      height: 25rem;
}

   }

`;