import styled from 'styled-components';


export const FooterContainer = styled.div`
background-color: #333333;
width: 100%;
height: 40vh;
color: white;
align-content: center;


@media screen and (max-width: 800px) {
     height: auto;
    }


.footer-container {
  display: flex;
  justify-content: space-around;
  padding-top: 5rem;
  
  
  @media screen and (max-width: 800px) {
      display: flex;
      flex-direction: column;
      padding-top: 2rem;
    }
}

.container {
  display: flex;
  flex-direction: column;
}

.list {
  font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
  font-weight: 400;
  font-style: normal;
  font-size: 13px;
}

.samo-foods {
  display: flex;
  justify-content: center;
  font-size: 19px;
  font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
  font-weight: 400;
  font-style: normal;
  @media screen and (max-width: 800px) {
     
    }
}

.title {
  font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
  font-weight: 400;
  font-style: normal;
}

`;