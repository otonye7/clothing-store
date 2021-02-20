import styled  from 'styled-components';

export const MenCategoriesContainer = styled.div `
  width: 100%;
  display: flex;

  .categories-items {
      display: flex;
      flex-direction: column;
  }

  .preview {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;
  }
    
`;