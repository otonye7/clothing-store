import styled from 'styled-components';
import Adidas from  '../../assets/white-nike.jpg';



export const FeaturedContainer = styled.div`
    width: 24.5%;
    max-width: 1200px;
   height: 12rem;
   @media screen and (max-width: 767px){
      display: flex;
      flex-direction: column;
      height: 100%;
      max-width: 100%;
      width: 100%;
}

   .fourth-image {
    width: 100%;
    height: 100%;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 767px){
      width: 100%;
      height: 18rem;
}
   }
`;