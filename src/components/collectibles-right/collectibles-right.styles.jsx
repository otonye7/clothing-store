import styled from 'styled-components';
import Romantic from  '../../assets/collectibles.jpg';


export const SubHeroContainer = styled.div`
position: relative;
 width: 610px;
 height: 20rem;
 background-color: #F2F2F2;
 margin-top: 1em;
 @media screen and (max-width: 767px){
      height: 100%;
      width: 100%;
}
 .image {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${Romantic});
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 767px){
      width: 100%;
      height: 20rem;
}
   }
  
`;