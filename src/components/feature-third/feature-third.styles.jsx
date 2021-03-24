import styled from 'styled-components';
import NewBalance from '../../assets/delta.jpg';


export const FeaturedContainer = styled.div`
    width: 300px;
   height: 17rem;
   margin-left: 1rem;
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
      height: 20rem;
}
   }
`;