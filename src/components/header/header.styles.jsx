import styled from 'styled-components';


export const HeaderContainer = styled.div`
  width: 100%;

  .logo {
      width: 20%;
      padding-left: 1em;
      color: #212b36;
  }

  .logo-name {
      color: #212b36;
  }
   

   .cart-containers {
       width: 10%;
       display: flex;
       justify-content: space-between;
   }

   .sign-out {
       margin-top: 1em;
       cursor: pointer;
   }
  .overall-container {
      display: flex;
      justify-content: space-between;
  }
  
  .cart-containers {
      padding-top: 1.2em;
      padding-right: 2em;
  }


  .person {
      cursor: pointer;
      color: black;
      margin-top: 0.5em;
  }

  .shopping-icon {
      width: 24px;
      cursor: pointer;
    }
`;