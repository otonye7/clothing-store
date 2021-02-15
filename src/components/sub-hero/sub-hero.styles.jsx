import styled from 'styled-components';


export const SubHeroContainer = styled.div`
 width: 100%;
 background-color: #F2F2F2;

 .subhero-container {
     position: relative;
     display: flex;
     justify-content: space-around;
 }

 .subhero-text {
     position: absolute;
     color: white;
     bottom: 0;
     top: 450px;
     left: 230px;
 }

 .men-arrival {
     font-size: 20px;
 }

  .nav-links {
      color: white;
      text-decoration: none;
      font-weight: 600;
      margin-left: 3em;
  }

 .secondsubhero-text {
     position: absolute;
     bottom: 0;
     color: black;
     bottom: 0;
     top: 450px;
     right: 230px;
 }

 .nav-link {
      color: black;
      text-decoration: none;
      font-weight: 600;
      margin-left: 4em;
  }

 .first-photo {
     margin-top: 1.5em;
     width: 46%;
 }

 .second-photo {
     margin-top: 1.5em;
     width: 46%;

 }

 img {
    width: 100%;
    height: 90%;
}

`;