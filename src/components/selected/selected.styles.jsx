import styled from 'styled-components';
import Jordan from  '../../assets/overpriced.jpg';


export const FeaturedContainer = styled.div`
 width: 1300px;
   height: 20rem;
   margin: 0 auto;
  
   @media screen and (max-width: 768px){
      display: none;
      width: 700px;
      height: 18rem;
}

@media screen and (max-width: 1024px){
      width: 1000px;
      height: 18rem;
      display: none;
} 
  
   
   @media screen and (max-width: 767px){
      display: none;
}
   .image {
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-image: url(${Jordan});
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 767px){
      width: 100%;
      height: 25rem;
}
   }
   
   }
`;