import styled from 'styled-components';
import NikeSub from  '../../assets/nikecortez.jpg';




export const SubHeroContainer = styled.div`
position: relative;
 width: 632px;
 height: 37rem;
 background-color: #F2F2F2;
 margin-top: 1em;

 
 
 @media screen and (max-width: 767px){
      height: 100%;
      width: 100%;
      padding-top: 10rem;
}
 .image {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(${NikeSub});
    background-position: center;
    background-size: cover;
    object-fit: cover;
    @media screen and (max-width: 767px){
      width: 100%;
      margin-bottom: 2em;
      height: 27rem;
      background-position: center;
    background-size: cover;
    object-fit: cover;
} 
   }
   .shop-left {
       position: absolute;
       width: 100%;
       bottom: 0;
       z-index: 1;
       text-align: center;
       align-items: center;
    @media screen and (max-width: 767px){
      width: 100%;
      /* background-color: #F2F2F2; */
    }
   }
   .container {
       width: 80%;
       height: 8rem;
       margin: 0 auto;
       
       @media screen and (max-width: 767px){
       background-color: #F2F2F2; 
       height: 7rem;
       padding-top: 2rem;
       height: 4rem;
    }
   }
   .link {
       width: 80%;
       margin: 0 auto;
       display: flex;
       justify-content: center;
   }
   .shop-text {
       width: 100%;
       color: white;
       align-items: center;
       display: flex;
       justify-content: center;
    
       @media screen and (max-width: 767px){
           width: 100%;
           color: black;
           text-align: center;
      /* background-color: #F2F2F2; */
    }
   }
   .shop-link {
       color: white;
       cursor: pointer;
       font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
       font-weight: 400;
       font-style: normal;
       line-height: 1.6;
       font-size: 15px;
       @media screen and (max-width: 767px){
           width: 50%;
           color: black;
      /* background-color: #F2F2F2; */
    }
   }

   .shop-text {
    font-family: "Stempel Schneidler", serif;
    font-weight: 500;
    font-style: normal;
    font-size: 33.75px;
   }
`;