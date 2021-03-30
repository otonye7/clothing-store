import styled from 'styled-components';


export const CheckoutItemContainer = styled.div`
 .checkout-item {
    width: 99%;
    display: flex;
    min-height: 100%;
    border-bottom: 1px solid black;
    
    font-size: 20px;
    align-items: center;

    @media screen and (max-width: 800px){
    display: flex;
    justify-content: space-between;
}


    .image-container {
        width: 33%;
        padding-right: 15px;

        @media screen and (max-width: 800px){
          width: 50%;
       }

        img {
            width: 100%;
            height: 100%;
        }
    }
     .name {
         width: 40%;
       @media screen and (max-width: 800px){
          width: 100%;
       }

     }
    .quantity {
        width: 30%;
        padding-left: 7%;
    }
    .price {
        width: 30%;
        padding-left: 10%;
    }

    .quantity {
        display: flex;

        .arrow {
            cursor: pointer;
        }

        .value {
            margin: 0 10px;
        }
    }

    .remove-button {
         padding-left: 7%; 
        cursor: pointer;
      }
}

.items {
    width: 55%;
    display: flex;

    @media screen and (max-width: 800px){
      display: flex;
      flex-direction: column;
}

}
`;