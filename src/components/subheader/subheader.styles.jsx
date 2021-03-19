import styled from 'styled-components';


export const SubHeaderContainer = styled.div`
  /* position: fixed;
  z-index: 1; */
  width: 98%;
  margin: 0 auto;
 

.nav-menu {
  width: 90%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 700px) {
       display: flex;
       flex-direction: column;
       width: 100%;
       height: 100%;
       right: 0;
       position: absolute;
       background-color: white;
       z-index: 2;
       /* top: 80px; */
       /* left: -110%; */
       opacity: 1;
  }
  }

.nav-menus {
  width: 90%;
  

  @media screen and (max-width: 700px) {
       background: white;
       display: none;
       left: 0px;
       opacity: 1;
       transition: all 0.5s ease;
       z-index: 4;
  }
  }

  .nav-items {
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