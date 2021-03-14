import styled from 'styled-components';
import NewBalance from  '../../assets/newbalance.jpg';


export const SubHeroContainer = styled.div`
position: relative;
 width: 48%;
 height: 100vh;
 background-color: #F2F2F2;
 margin-top: 1em;

 border: 1px solid red;
 @media screen and (max-width: 800px){
      height: 40vh;
      width: 100%;
}



 .image {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${NewBalance});
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