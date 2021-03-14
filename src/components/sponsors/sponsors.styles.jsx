import styled from 'styled-components';




export const SponsorsContainer = styled.div`
  width: 100%;
  background-color: #F2F2F2;

  @media screen and (max-width: 800px){
      display: none;
}

  .sponsor-container {
      width: 100%;
      display: flex;
      justify-content: space-around;
  }

  .adidas {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .converse {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .champion {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .jumpman {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .nb {
        width: 100%;
        display: flex;
        justify-content: center;
    }

  img {
    width: 20%;
    height: auto;
   }
`;