import styled from 'styled-components';
import  Champion from  '../../assets/champion.png';
import Adidas from  '../../assets/adi.svg';
import Converse from  '../../assets/converse.png';
 import Jumpman from  '../../assets/nb.png';
 import Nike from  '../../assets/doit.svg';
import Lacoste from  '../../assets/lacoste.png';




export const SponsorsContainer = styled.div`
   position: relative;
   width: 1300px;
   height: 3.2rem;
   margin-top: 1em;
   margin: 0 auto;
   display: flex;
   justify-content: space-between;

  @media screen and (max-width: 800px){
      display: none;
}


.adidas {
    position: relative;
    width: 6%;
    height: 2.7rem;
    object-fit: cover;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    @media screen and (max-width: 767px){
      display: none;
}
   }

   .converse {
    position: relative;
    width: 6%;
    height: 2.7rem;
    object-fit: cover;
    background-image: url(${Converse});
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    @media screen and (max-width: 767px){
      display: none;
}
   }

   .champion {
    position: relative;
    width: 6%;
    height: 2.7rem;
    object-fit: cover;
    background-image: url(${Champion});
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    @media screen and (max-width: 767px){
      display: none;
}
   }

   .jumpman {
    position: relative;
    width: 6%;
    height: 2.7rem;
    object-fit: cover;
    background-image: url(${Jumpman});
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    @media screen and (max-width: 767px){
      display: none;
}
   }


   .nike {
    position: relative;
    width: 6%;
    height: 2.7rem;
    object-fit: cover;
    background-image: url(${Nike});
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    @media screen and (max-width: 767px){
      display: none;
}
   }

   .lacoste {
    position: relative;
    width: 6%;
    height: 2.7rem;
    object-fit: cover;
    background-image: url(${Lacoste});
    background-position: center;
    background-size: cover;
    box-sizing: border-box;
    @media screen and (max-width: 767px){
      display: none;
}
   }

/* 
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

 
   .champion {
    width: 10%;
    color: black;
    height: 5rem;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
  }  */

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