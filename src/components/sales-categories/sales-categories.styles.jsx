import styled  from 'styled-components';

export const RomanticCrownCategoriesContainer = styled.div `
  width: 97.5%;
  display: flex;
  justify-content: space-around;
  padding-top: 10rem;

  .colors-items: {
    width: 20%;
    color: red;
  }

  .categories-items {
    width: 78%;
      display: flex;
      flex-direction: column;
  }

  .preview {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
  }
    
`;