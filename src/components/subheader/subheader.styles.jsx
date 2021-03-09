import styled from 'styled-components';



export const SubHeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;



  .nav-links {
      text-decoration: none;
      color: black;
  }

  .sub-links {
      background-color: white;
      position: absolute;
      display: none;  
  }

 

  & :hover {
    cursor: pointer;

   .sub-links {
       display: block;
   }

  }

`;