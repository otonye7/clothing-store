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

      &:hover {
      cursor: pointer;

      & .background-image {
        transform: scale(1.1);
        transition: transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95);
      }

      & .content {
        opacity: 0.9;
      }
    }
    

    &.large {
      height: 380px;
    }
  
    &:first-child {
      margin-right: 7.5px;
    }
  
    &:last-child {
      margin-left: 7.5px;
    }

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