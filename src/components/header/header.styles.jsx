import styled from 'styled-components';


export const HeaderContainer = styled.div`
  width: 100%;
  padding-top: 2em;
 

  .logo {
      width: 30%;
      padding-left: 1em;
      color: #212b36;

    @media screen and (max-width: 767px) { 
        width: 40%;
    }
  }

  .logo-name {
      width: 100%;
      color: brown;
      
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
      margin-bottom: 1rem;

    @media screen and (max-width: 767px) { 
        margin-top: 1em;
    }
  }

  .shopping-icon {
      width: 24px;
      cursor: pointer;
      margin-bottom: 1rem;
    }
`;