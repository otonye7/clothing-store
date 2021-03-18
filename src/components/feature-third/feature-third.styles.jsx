import styled from 'styled-components';
import NewBalance from '../../assets/newbalance997.jpg';


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

   .third-image {
    width: 100%;
    height: 15rem;
    background-image: url(${NewBalance});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 800px){
      width: 100%;
      height: 20rem;
}

   }

`;