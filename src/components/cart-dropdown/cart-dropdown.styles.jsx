import styled from 'styled-components';


export const CollectiblesContainer = styled.div`
 

 .cart-dropdown {
  position: absolute;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 60px;
  right: 10px; 
  z-index: 5;

  .empty-message {
    font-size: 18px;
    margin: 50px auto;
  }

  .cart-items {
    height: 500px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
    overflow-x: hidden;
  }

  .buttons {
    margin-top: auto;
    display: flex;
    justify-content: center;
  }
`;