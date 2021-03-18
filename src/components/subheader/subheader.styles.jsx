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
        top: .75;
        right: 0;
        width: 100%;
        height: 100vh;
        max-height: ${({open}) => open ? '100vh' : '0'};
        background-color: white;
        z-index: 2;
        overflow-y: scroll;
        overflow-x: scroll;
  }
  }

  .list {
    list-style: none;
    text-align: center;
    align-content: center;
    align-items: center;
  }

  .links {
    text-decoration: none;
    color: black;

    @media screen and (max-width: 700px) {
        text-align: center;
  }
  }
`;