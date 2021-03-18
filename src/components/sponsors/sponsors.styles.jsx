import styled from 'styled-components';
import Nike from  '../../assets/doit.svg';
import Adidas from  '../../assets/adi.svg';
import Champion from  '../../assets/champion.png';
import Jumpman from  '../../assets/jumpman.png';
import Nb from  '../../assets/nb.png';




export const SponsorsContainer = styled.div`
  width: 100%;
  height: 8rem;
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
    position: relative;
    width: 90%;
    height: 6.5rem;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
  }

  .converse-container {
      width: 10%;
  }

  .converse {
    position: relative;
    width: 100%;
    background-color: #F2F2F2;
    height: 6.5rem;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
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
  }

  
`;