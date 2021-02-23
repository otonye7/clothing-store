import styled from 'styled-components';
import subheaderComponent from './subheader.component';


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
      position: relative;
      list-style: none;
      line-height: 60px;
      display: inline-block;  
  }

  .unordered {
      width: 25%;
      position: absolute;
      top: 5.2em;
      display: none;
      z-index: 1;
  }

 

  &:hover {
    cursor: pointer;

   .unordered {
       display: block;
   }

  }

`;