import styled from 'styled-components';


export const AboutContainer = styled.div`
 width: 100%;
 height: 40vh;
 padding-bottom: 3em;

 @media screen and (max-width: 800px){
     width: 100%;
     height: 65vh;
}

 .overall {
     width: 98%;
     height: 40vh;
     margin: 0 auto;
     background-color: white;
     /* padding-left: 1em; */

@media screen and (max-width: 800px){
     height: 65vh;
}
 }

 

 .about-text {
     text-align: center;
     padding-top: 2em;
     font-weight: 500;

     @media screen and (max-width: 800px){
      padding-top: 1em;
}
 }


 .span-container {
     display: flex;
     justify-content: center;
 }

 .about-span {
     text-align: center;
     width: 70%;
     display: block;
     margin-block-start: 1em;
     margin-block-end: 1em;
     margin-inline-start: 0px;
     margin-inline-end: 0px
 }

`;