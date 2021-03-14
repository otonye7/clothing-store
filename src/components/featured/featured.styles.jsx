import styled from 'styled-components';
import Jordan from  '../../assets/jordan.jpg';
import Adidas from  '../../assets/adidas-ultra-boost.jpg';
import NewBalance from '../../assets/newbalance997.jpg';
import Gazelle from '../../assets/gazelletwo.jpg';


export const FeaturedContainer = styled.div`
 width: 100%;
   height: 45vh;
   display: flex;
   justify-content: space-around;

   @media screen and (max-width: 800px){
      display: flex;
      flex-direction: column;
      height: 100vh;
      width: 100%;
}

   .image {
    width: 20%;
    height: 100%;
    background-image: url(${Jordan});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 800px){
      width: 100%;
      height: 100vh;
}

   }

   .second-image {
    width: 20%;
    height: 100%;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 800px){
      width: 100%;
      height: 100vh;
      margin-top: 1em;
}
}
    
   .third-image {
    width: 20%;
    height: 100%;
    background-image: url(${NewBalance});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 800px){
      width: 100%;
      height: 100vh;
      margin-top: 1em;
}

   }

   .fourth-image {
    width: 20%;
    height: 100%;
    background-image: url(${Gazelle});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 800px){
      width: 100%;
      height: 100vh;
      margin-top: 1em;
}

   }

`;