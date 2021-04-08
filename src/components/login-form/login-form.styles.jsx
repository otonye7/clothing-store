import styled from 'styled-components';


export const LogInContainer = styled.div`
 width: 100%;
 margin-top: 2em;
 display: flex;
 justify-content: center;


 .sign-in {
     width: 30vw;

     @media screen and (max-width: 767px) { 
        width: 100%;
    }
 }

 .sign-g {
     width: 100%;

     @media screen and (max-width: 767px) { 
        margin-top: 0.5rem;
    }
 }

 .buttons {
     display: flex;
     justify-content: space-between;
     padding-bottom: 1em;

     @media screen and (max-width: 767px) { 
        width: 100%;
        display: flex;
        flex-direction: column;
    }
 }

 .sign-up {
     text-decoration: none;
     color: black;
 }

`;