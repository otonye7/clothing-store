import styled from 'styled-components';
import Bugaboo from '../../assets/bugaboo.jpg';


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
      height: 60%;
      width:30%;
      border: 2px solid red;
      background-color: white;
      position: absolute;
      display: none;  
      z-index: 2;
  }

  .links-container {
    width: 40%;
    margin-right: 2em;
    border: 2px solid red;
  }
  

  .image-container {
    border: 2px solid red;
    width: 60%;
  }

  .image {
    width: 95%;
    height: 50%;
    background-image: url(${Bugaboo});
    background-position: center;
    background-size: cover;

   }


  .list {
    text-decoration: none;
  }

 

  & :hover {
    cursor: pointer;

   .sub-links {
       display: flex;
       justify-content: space-around;
   }

  }

`;