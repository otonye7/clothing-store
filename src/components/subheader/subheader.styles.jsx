import styled from 'styled-components';


export const SubHeaderContainer = styled.div`
  /* position: fixed;
  z-index: 1; */
  width: 98%;
  margin: 0 auto;
 

.container {
  width: 90%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
        position: fixed;
        display: flex;
        flex-direction: column;
        width: 100%;
        height: 80%;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        background-color: white;
        z-index: 2;
  }
  }

  .list {
    list-style: none;
  }

  .links {
    text-decoration: none;
    color: black;
  }
`;