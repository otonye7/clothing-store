import styled from 'styled-components';


export const CollectiblesContainer = styled.div`
  width: 100%;
  
 .cart-item {
    width: 100%;
    display: flex;
    height: 80%;
    margin-bottom: 15px;


    img {
        width: 30%;
    }

    .item-details {
        width: 70%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        padding: 10px 20px;

        .name {
            font-size: 16px;
        }
    }
}
`;