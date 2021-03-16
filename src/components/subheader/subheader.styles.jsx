import styled from 'styled-components';
import Bugaboo from '../../assets/bugaboo.jpg';
import Jordan from '../../assets/gcol.jpg';
import Women from '../../assets/wc.jpg';
import Kids from '../../assets/newbalancee.jpg';
import Brands from '../../assets/oc.jpg';


export const SubHeaderContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  padding-left: 1em;

  
  @media screen and (max-width: 700px) { 
        width: 100%;
        height: 70vh;
        display: flex;
        flex-direction: column;
  }



  .nav-links {
      text-decoration: none;
      color: black;

      @media screen and (max-width: 700px) { 
        /* display: none; */
    }
  }
  
  
  .sub-links {
      height: 60%;
      width:40%;
      background-color: white;
      position: absolute;
      display: none;  
      z-index: 2;
  }

  .links-container {
    width: 30%;
  }

  .nav-link {
     font-size: 14px;
     font-weight: 500;
     margin-left: -2.5em;
  }

  .shop {
    display: flex;
    justify-content: center;
    padding-top: 1em;
  }

  .shop-links {
    color: black;
    text-align: center;
    text-decoration: none;
  }
  

  .image-container {
    width: 55%;
    height: 70%;
    margin-top: 2em;
    margin-bottom: 1.5em;
  }

  .image {
    width: 100%;
    height: 100%;
    background-image: url(${Bugaboo});
    background-position: center;
    background-size: cover;

   }

   .second-image {
    width: 100%;
    height: 100%;
    background-image: url(${Jordan});
    background-position: center;
    background-size: cover;

   }

   .third-image {
    width: 100%;
    height: 100%;
    background-image: url(${Women});
    background-position: center;
    background-size: cover;

   }

   .fourth-image {
    width: 100%;
    height: 100%;
    background-image: url(${Kids});
    background-position: center;
    background-size: cover;

   }

   .fifth-image {
    width: 100%;
    height: 100%;
    background-image: url(${Brands});
    background-position: center;
    background-size: cover;

   }


  .list {
    text-decoration: none;
  }
  

  .menu-icon {
    display: none;

    @media screen and (max-width: 700px) { 
        display: flex;
    }
  }
 

  & :hover {
    cursor: pointer;

   .sub-links {
       display: flex;
       justify-content: space-evenly;
   }

  }

`;