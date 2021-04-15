import styled from 'styled-components';
import Jordan from  '../../assets/air-zoom.jpg';


export const FeaturedContainer = styled.div`
    width: 200px;
   height: 12rem;
  
   
   @media screen and (max-width: 767px){
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
}


   .image {
    width: 100%;
    height: 100%;
    background-image: url(${Jordan});
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 767px){
      width: 100%;
      height: 18rem;
}
   }
   
   }
`;