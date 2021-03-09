import styled from 'styled-components';



export const SubHeaderContainer = styled.div`
  width: 100%;
  margin: 0 auto;


  .overall-container {
      width: 80%;
  }

  .nav-containers {
      display: flex;
      justify-content: space-around;
  }

  .nav-links {
      text-decoration: none;
      color: black;
  }

  .boat {
      background-color: white;
      position: absolute;
      list-style: none;
      line-height: 60px;
      display: none;  
  }

 

  &:hover {
    cursor: pointer;

   .unordered {
       display: block;
   }

   .boat {
       display: block;
   }

  }

`;