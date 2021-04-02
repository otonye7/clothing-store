import styled  from 'styled-components';

export const ColumbiaCategoriesContainer = styled.div `
  width: 97.5%;
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  max-width: 1300px;
  padding-top: 7rem;

  @media screen and (max-width: 767px){
    width: 100%;
    padding-top: 5rem;
}

.colors-items {
  
  @media screen and (max-width: 767px){
    display: none;
}
}

  .categories-items {
    width: 78%;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 767px){
     width: 98%;
}
  }

  .preview {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-gap: 10px;

 @media screen and (max-width: 767px){
      display: grid;
      grid-template-columns: 1fr 1fr;
}
  }
    
`;