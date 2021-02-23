import styled  from 'styled-components';

export const ColumbiaCategoriesContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: space-around;

  .colors-items: {
    width: 15%;
    color: red;
  }

  .categories-items {
    width: 85%;
      display: flex;
      flex-direction: column;
  }

  .preview {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
  }
    
`;