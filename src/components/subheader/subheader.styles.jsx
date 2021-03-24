import styled from 'styled-components';


export const SubHeaderContainer = styled.div`
  /* position: fixed;
  z-index: 1; */
  width: 93%;
  margin: 0 auto;
  padding-bottom: 1em;
  
 
.nav-menu {
  width: 90%;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  @media screen and (max-width: 767px) {
       display: ${({ open }) => open ? "flex" : "none"};
       flex-direction: column;
       width: 100%;
       /* height: 100%; */
       right: 0;
       position: absolute;
       background-color: white;
       z-index: 2;
       height: ${({ open }) => open ? "100%" : "0"};
       /* top: 80px; */
       /* left: -110%; */
       opacity: 1;
  }
  }
.nav-menus {
  width: 90%;
  
  @media screen and (max-width: 767px) {
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
    @media screen and (max-width: 767px) {
        text-align: center;
  }
  }
`;