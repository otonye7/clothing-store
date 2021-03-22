import styled  from 'styled-components';

export const WomenCategoriesContainer = styled.div `
  width: 98%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  padding-top: 10rem;

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