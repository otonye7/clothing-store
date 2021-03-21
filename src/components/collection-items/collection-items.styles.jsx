import styled from 'styled-components';


export const CollectionItemContainer = styled.div`
display: flex;
justify-content: space-around;
width: 100%;

  .menu-items {
      width: 50%;
      height: 450px;
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
        width: 100%;
        opacity: 0.5;
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
      display: flex;
      width: 40%;
      flex-direction: column;
      font-size: 17px;
  }

.title {
    
    margin-bottom: 15px;
    font-size: 30px;
    font-weight: 500;
}

.description-title {
    font-weight: 500;
}

.margin {
    border-bottom: 1px solid grey;
}

.price {
    
    font-size: 28px;
    font-weight: 500;
}
`;