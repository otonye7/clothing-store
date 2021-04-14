  
import styled from 'styled-components';


export const HomepageContainer = styled.div`
 width: auto;
 background-color: #F2F2F2;
 margin-top: 1em;
 overflow-x: hidden;

 .hero {
    width: auto;
 }
 .sub-hero {
     width: 98%;
     height: 100%;
     display: flex;
     justify-content: center;
     margin: 0 auto;
     @media screen and (max-width: 767px){
      width: 100%;
      height: auto;
      display: flex;
      flex-direction: column;
}
 }
 .sponsors {
    width: 100%;
     height: 100%;
     display: flex;
     justify-content: space-between;
 }
 .sorel {
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     margin: 0 auto;
     @media screen and (max-width: 767px){
      display: flex;
      flex-direction: column;
}
 }
 .crown {
     width: 100%;
     height: 100%;
     display: flex;
     justify-content: center;
     margin: 0 auto;
     @media screen and (max-width: 767px){
      display: flex;
      flex-direction: column;
}
 }
 .collectibles {
     display: flex;
     width: 100%;
     height: 100%;
     margin: 0 auto;
     justify-content: center;
     @media screen and (max-width: 767px){
      display: flex;
      padding-top: 10rem;
      flex-direction: column;
}
 }
 .feature {
    width: 1200px;
     height: 100%;
     display: flex;
     justify-content: space-around;
     padding-top: 2em;
     padding-bottom: 2em;
     margin: 0 auto;
     
     
     @media screen and (max-width: 767px){
      display: flex;
      flex-direction: column;
}
 }
`;