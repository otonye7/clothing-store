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
 }

 .margin {
    border-bottom: 1px solid black;
 }

 .header-blocks {
     width: 23%;
    &:last-child {
          width: 8%;
        }
 }
`;