import styled from 'styled-components';


export const CollectionItemContainer = styled.div`
margin-left: 3em;
  .menu-items {
      width: 85%;
      display: flex;
      flex-direction: column;
      height: 450px;
      align-items: center;
      position: relative;
  }

  .background-image {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
  }

  &:hover {
    .image {
        opacity: 0.6;
    }
}
    

    .custom-button {
        width: 44%;
        height: 8%;
        opacity: 0.5;
        position: absolute;
        bottom: 0px;
        display: flex;
        justify-content: center;
}

&:hover {
        .image {
            opacity: 0.6;
        }

        .custom-button {
            opacity: 0.95;
            display: flex;
        }
    }

  .content {
      width: 80%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 17px;
  }

.title {
    width: 90%;
    margin-bottom: 15px;
}

.price {
    width: 10%;
}
`;