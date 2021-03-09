import styled from 'styled-components';


export const SubHeroContainer = styled.div`
 width: 100%;
 height: 100%;
 background-color: #F2F2F2;

 .subhero-container {
     position: relative;
     display: flex;
     justify-content: space-around;
 }

 .subhero-text {
     width: 46%;
     position: absolute;
     color: white;
     bottom: 0;
    text-align: center;
    margin-bottom: 2em;
 }

 .men-arrival {
     font-size: 20px;
     text-align: center;
 }

  .nav-links {
      color: white;
      text-decoration: none;
      font-weight: 600;
      text-align: center;
  }

 .secondsubhero-text {
     width: 46%;
     position: absolute;
     bottom: 0;
     color: black;
     text-align: center;
     margin-bottom: 2em;
 }

 .nav-link {
      color: black;
      text-decoration: none;
      font-weight: 600;
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
    height: 100%;
}

`;