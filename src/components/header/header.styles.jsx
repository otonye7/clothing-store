import styled from 'styled-components';


export const HeaderContainer = styled.div`
 max-width: 1350px; 
  width: 99%;
  margin-top: 1.5rem;
  margin-bottom: 2rem;




  .container {
    width: 97%;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    /* align-items: center;
    text-align: center; */
  }

  .title {
    padding-top: 0.5rem;
  }

  .person {
      color: black;
      margin-right: 1rem;
  }

  .title-link {
       color: brown;
      text-decoration: none;
      font-size: 24px;
      font-weight: 600;
      font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
      font-style: normal;
  }

  .cart-container {
    display: flex;
    justify-content: space-around;
  }
  
  .cart-icon {
    /* padding-top: 0.2rem; */
  }

  .help-text {
    padding: 1rem;
    text-decoration: none;
    /* margin-bottom: 2rem; */
    font-size: 17px;
    font-weight: 500;
    color: black;
    font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
    font-style: normal;
  }
  
`;