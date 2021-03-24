import styled from 'styled-components';
import NikeSub from  '../../assets/women-adidas.jpg';




export const SubHeroContainer = styled.div`
position: relative;
 width: 632px;
 height: 37rem;
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
       height: 10rem;
       margin: 0 auto;
       
       @media screen and (max-width: 767px){
       background-color: #F2F2F2; 
       height: 7rem;
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
       text-decoration: none;
       color: white;
       cursor: pointer;
       @media screen and (max-width: 767px){
           width: 50%;
           color: black;
      /* background-color: #F2F2F2; */
    }
   }
`;