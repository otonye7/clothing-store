import styled from 'styled-components';
// import Nike from  '../../assets/doit.svg';
import Adidas from  '../../assets/adi.svg';
import Converse from  '../../assets/converse.svg';
 import Birken from  '../../assets/birken.svg';
// import Nb from  '../../assets/nb.png';




export const SponsorsContainer = styled.div`
  width: 98%;
  height: 5rem;
  margin: 0 auto;
  background-color: #F2F2F2;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 800px){
      display: none;
}


  .adidas-container {
      width: 10%;
  }


  .adidas {
    width: 10%;
    height: 5rem;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
  }

 .converse {
    width: 10%;
    height: 5rem;
    color: black;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
  } 

  .converse {
    width: 10%;
    height: 5rem;
    color: black;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
  } 

  .jumpman {
    width: 10%;
    height: 5rem;
    color: black;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
  } 

  .nb {
    width: 10%;
    height: 5rem;
    color: black;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
  } 

  /* .champion {
    font-size: 20px;
    font-weight: 600;
    align-content: center;
    text-align: center;
  } */

   .champion {
    width: 10%;
    color: black;
    height: 5rem;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
  } 

  /* .converse-container {
      width: 10%;
  }

  .champion-container {
      width: 10%;
  }

  .champion {
    position: relative;
    width: 100%;
    background-color: #F2F2F2;
    height: 6.5rem;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
  }

  .jumpman-container {
      width: 10%;
  }

  .jumpman {
    position: relative;
    width: 100%;
    background-color: #F2F2F2;
    height: 6.5rem;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
  }
  

  .nb-container {
      width: 10%;
  }

  .nb {
    position: relative;
    width: 100%;
    background-color: #F2F2F2;
    height: 6.5rem;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
  } */

  
`;