import styled from 'styled-components';



export const CheckoutContainer = styled.div`
 width: 100%;
 background-color: #F2F2F2;
 margin: 0 auto;

 .checkout-page {
     width: 96%;
     min-height: 90vh;
     display: flex;
     flex-direction: column;
     margin: 0 auto;
 }

 .checkout-header {
     width: 100%;
     display: flex;
     justify-content: space-between;
     margin: 0 auto;

     @media screen and (max-width: 767px){
      display: none;
}
 }

 .margin {
    border-bottom: 1px solid black;
 }

 .header-blocks {
     width: 48%;
    &:last-child {
          width: 8%;
        }
 }

 .bottom-container {
     width: 96%;
     margin: 0 auto;
     display: flex;
     justify-content: space-between;

     @media screen and (max-width: 800px){
      display: flex;
      flex-direction: column;
}
 }

 .shipping-text {
     font-weight: 500;
     font-size: 17px;
     padding-bottom: 1rem;
 }

 .subtotal {
     font-size: 25px;

@media screen and (max-width: 800px){
      padding-top: 1rem;
      width: 100%;
}
 }

 .shipping-link {
     color: black;
 }

 .total {
     display: flex;
     flex-direction: column;
 }

 .related-products {
    text-align: center;
}
`;