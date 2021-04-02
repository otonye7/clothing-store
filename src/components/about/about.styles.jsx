import styled from 'styled-components';


export const AboutContainer = styled.div`
 width: 100%;
 height: 100%;

 @media screen and (max-width: 767px){
     width: 100%;
     height: 100%;
}

 .overall {
     width: 96%;
     height: 100%;
     margin: 0 auto;
     background-color: #fafafa;
     /* padding-left: 1em; */

@media screen and (max-width: 767px){
     height: 100%;
}
 }

 

 .about-text {
     text-align: center;
     padding-top: 1em;
     font-weight: 500;

     @media screen and (max-width: 767px){
      padding-top: 1em;
}
 }


 .span-container {
     display: flex;
     justify-content: center;
     padding-bottom: 2em;
 }

 .about-span {
     text-align: center;
     width: 75%;
     display: block;
     margin-block-start: 1em;
     margin-block-end: 1em;
     margin-inline-start: 0px;
     margin-inline-end: 0px
 }

`;