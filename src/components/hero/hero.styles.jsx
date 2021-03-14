import styled from 'styled-components';
import Nike from  '../../assets/Nike-Roshe.jpg'


export const HeroContainer = styled.div`
 position: relative;
 width: 100%;
 height: 100vh;
 background-color: #F2F2F2;


 @media screen and (max-width: 800px){
      height: 40vh;
      width: 100%;
}



 .image {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${Nike});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 800px){
      width: 100%;
}
   }


   .shop-left {
       position: absolute;
       width: 100%;
       top: 0;
       z-index: 1;
       text-align: center;
   }


   .shop-text {
       width: 100%;
       color: white;
       text-align: center;
       font-weight: 550;
   }

   .shop-link {
       text-decoration: none;
       color: black;
       cursor: pointer;
   }
   
   button {
    min-width: 10px;
    width: auto;
    border-radius: 5px;
    height: 38px;
    letter-spacing: 0.5px;
    line-height: 28px;
    padding: 0 18px 0 18px;
    font-size: 14px;
    background-color: white;
    color: black;
    border: none;
    outline: none;
    cursor: pointer;
}

`;