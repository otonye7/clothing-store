import styled from 'styled-components';


export const SignUpContainer = styled.div`
 width: 100%;
 margin-top: 2em;
 display: flex;
 justify-content: center;

 .sign-up {
       width: 30vw;

       @media screen and (max-width: 767px) { 
        width: 100%;
    }
 }

 .buttons {
     display: flex;
     justify-content: center;
     padding-bottom: 1em;

     @media screen and (max-width: 767px) { 
        width: 100%;
    }
 }

 .signs {
     width: 100%;
 }


 .title {
     text-align: center;
 }

`;