import styled from 'styled-components';


export const MenuItemContainer = styled.div`

 
@media screen and (max-width: 767px){
    
}
  .menu-items {
      width: 100%;
      max-width: 210px;
      display: flex;
      flex-direction: column;
      height: 200px;
      align-items: center;
      position: relative;

  @media screen and (max-width: 767px){
    width:100%;
    
}

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
      /* max-width: 200px; */
      overflow: hidden;
      height: 100%;
      max-height: 170px;
      background-size: cover;
      background-position: center;
      margin-bottom: 5px;

@media screen and (max-width: 767px){
    width: 100%;
    height:80%;
    margin: 0 auto;
}

  }

  &:hover {
    .image {
        opacity: 0.6;
    }
}

  .content {
      width: 90%;
      height: 5%;
      display: flex;
      justify-content: space-between;
      font-size: 17px;

  @media screen and (max-width: 767px){
    width: 90%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

  }

.title {
    width: 90%;
    margin-bottom: 15px;
    font-size: 15px;
    font-weight: 500;
    font-family: "Stempel Schneidler", serif;
    font-style: normal;
    line-height: 1.4;
}

.price {
    width: 10%;
    font-size: 15px;
    font-weight: 500;
    font-family: "Stempel Schneidler", serif;
    font-style: normal;
    line-height: 1.4;
}
`;