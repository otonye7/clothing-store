import styled from 'styled-components';
import Nike from  '../../assets/jordanhero.jpg'


export const HeroContainer = styled.div`
 position: relative;
 width: 1300px;
 height: 37rem;
 background-color: #F2F2F2;
 display: flex;
 justify-content: center;
 margin: 0 auto;
 @media screen and (max-width: 769px){
      height: 100%;
      width: 100%;
       display: none;
}
 .image {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${Nike});
    background-position: center;
    background-size: cover;
    @media screen and (max-width: 767px){
      width: 100%;
      height: 17em;
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
       font-size: 25px;
       font-family: "Stempel Schneidler",serif;
       font-weight: 500;
       font-style: normal;

 @media screen and (max-width: 769px){
     display: none;
}
   }
   .shop-link {
       color: white;
       font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
       font-weight: 400;
       font-style: normal;
       line-height: 1.6;
       font-size: 19px;

       @media screen and (max-width: 769px){
     display: none;
}
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