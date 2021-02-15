import styled from 'styled-components';


export const HeroContainer = styled.div`
 width: 100%;
 background-color: #F2F2F2;

 .hero-container {
     position: relative;
     width: 100%;
     display: flex;
     justify-content: space-around;
 }

 .cover-photo {
        width: 96%;
        background-size: cover;
        background-repeat: no-repeat;
        overflow: hidden;
    }

    .hero-text {
        position: absolute;
        color: white;
    }

    img {
    width: 100%;
    height: auto;
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