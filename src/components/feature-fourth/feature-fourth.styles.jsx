import styled from 'styled-components';
import Adidas from  '../../assets/Nike-Roshe.jpg';



export const FeaturedContainer = styled.div`
    width: 300px;
   height: 15rem;
   @media screen and (max-width: 767px){
      display: flex;
      flex-direction: column;
      height: 100%;
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
      height: 20rem;
}
   }
`;