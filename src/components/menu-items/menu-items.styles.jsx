import styled from 'styled-components';


export const MenuItemContainer = styled.div`
margin-left: 3em;
  .menu-items {
      width: 90%;
      display: flex;
      flex-direction: column;
      height: 140px;
      align-items: center;
      position: relative;
  }

  .background-image {
      width: 100%;
      height: 95%;
      background-size: cover;
      background-position: center;
      margin-bottom: 5px;
  }

  &:hover {
    .image {
        opacity: 0.6;
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