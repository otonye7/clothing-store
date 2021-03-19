import styled from 'styled-components';


export const FooterContainer = styled.div`
background-color: #333333;
width: 100%;
height: 40vh;
color: white;
align-content: center;

.footer-container {
  display: flex;
  justify-content: space-around;
  
  
  @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
    }
}

.container {
  display: flex;
  flex-direction: column;
}

.samo-foods {
  display: flex;
  justify-content: center;
  font-size: 19px;
  @media screen and (max-width: 800px) {
     
    }
}

`;