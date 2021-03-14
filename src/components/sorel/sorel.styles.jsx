import styled from 'styled-components';
import SorelShoe from  '../../assets/sorel-boots-1.jpg';



export const SubHeroContainer = styled.div`
position: relative;
 width: 48%;
 height: 100vh;
 background-color: #F2F2F2;
 margin-top: 1em;


 @media screen and (max-width: 800px){
      height: 40vh;
      width: 100%;
}



 .image {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${SorelShoe});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 800px){
      width: 100%;
}
   }

   .shop-left {
       position: absolute;
       width: 100%;
       bottom: 0;
       z-index: 1;
       text-align: center;
   }


   .shop-text {
       width: 100%;
       color: black;
       text-align: center;
   }

   .shop-link {
       text-decoration: none;
       color: black;
       cursor: pointer;
   }

`;