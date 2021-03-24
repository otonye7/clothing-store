  
import styled from 'styled-components';
import NikeSub from  '../../assets/nike-subhero.jpg';




export const SubHeroContainer = styled.div`
position: relative;
 width: 632px;
 height: 37rem;
 background-color: #F2F2F2;
 margin-top: 1em;
 margin-right: 2rem;
 
 @media screen and (max-width: 767px){
      height: 100%;
      width: 100%;
}
 .image {
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    background-image: url(${NikeSub});
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    @media screen and (max-width: 767px){
      width: 100%;
      margin-bottom: 2em;
      height: 27rem;
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
       margin: 0 auto;
       height: 10rem;
       
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