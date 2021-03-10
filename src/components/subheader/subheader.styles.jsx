import styled from 'styled-components';



export const SubHeaderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding-left: 1em;



  .nav-links {
      text-decoration: none;
      color: black;
  }

  .sub-links {
      height: 40%;
      width:30%;
      background-color: white;
      position: absolute;
      display: none;  
      z-index: 2;
  }

 

  & :hover {
    cursor: pointer;

   .sub-links {
       display: block;
   }

  }

`;