import styled from 'styled-components';




export const CollectionItemContainer = styled.div`
display: flex;
justify-content: space-around;
width: 100%;

@media screen and (max-width: 767px){
    width: 96%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
}

  .menu-items {
      width: 40%;
      height: 400px;

@media screen and (max-width: 767px){
    width: 100%;
}

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

@media screen and (max-width: 767px){
   width: 100%;
}

  }

.title {
    
    margin-bottom: 15px;
    font-size: 27px;
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

.button {

    width: 80%;

    @media screen and (max-width: 767px){
    width: 98%;
    margin: 0 auto;
}

}

.by {
    font-size: 12px;
    font-weight: 500;
}

.border-box {
     height: 45px;
     width:  120px; 
     border: 1px solid black; 
     text-align:center; 
     font-weight: 500;
}

`;