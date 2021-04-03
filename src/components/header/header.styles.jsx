import styled from 'styled-components';


export const HeaderContainer = styled.div`
  width: 96%;
  padding-top: 2em;
  margin: 0 auto;
  padding-bottom: 1em;
  position: relative;
  .logo {
      width: 30%;
      color: #212b36;
      
    @media screen and (max-width: 767px) { 
        width: 40%;
    }
  }
  .logo-name {
      width: 100%;
      color: brown;
      text-decoration: none;
      font-size: 24px;
      font-weight: 600;
      font-family: Helvetica, "Helvetica Neue", Arial, "Lucida Grande", sans-serif;
      font-style: normal;
      
  }
   
   .cart-containers {
       width: 15%;
       display: flex;
       justify-content: space-between;
    
    @media screen and (max-width: 767px) { 
        width: 25%;
    }
   }
   .sign-out {
      
       cursor: pointer;
   }
  .overall-container {
      display: flex;
      justify-content: space-between;
  }
  
  .cart-containers {
      width: 20%;
      padding-right: 2em;
  }
  .person {
      cursor: pointer;
      color: black;
      margin-bottom: 1rem;
    @media screen and (max-width: 767px) { 
     margin-top: 0.5rem;
    }
  }
  .shopping-icon {
      width: 24px;
      cursor: pointer;
      margin-bottom: 1rem;
      position: relative;
    }

    .item-count {
      position: absolute;
      font-size: 15px;
      font-weight: bold;
      margin-bottom: 0.5rem;
    }

    .cart-icon {
    /* width: 45px;
    height: 45px; */
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    }
`;