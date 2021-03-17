import styled from 'styled-components';
import Bugaboo from '../../assets/bugaboo.jpg';
import Jordan from '../../assets/gcol.jpg';
import Women from '../../assets/wc.jpg';
import Kids from '../../assets/newbalancee.jpg';
import Brands from '../../assets/oc.jpg';

export const SubHeaderContainer = styled.div`
  /* position: fixed;
  z-index: 1; */
  width: 98%;
  margin: 0 auto;
  

  .wrapper {
    width: 80%;
  }

  .nav-links {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
  }

  .list {
    list-style: none;
  }

  .links {
    text-decoration: none;
    color: black;
  }

  .drop-links {
    width: 100%;
    text-decoration: none;
    color: black;
    /* padding: 0 0 0 15px; */
  }

  .drop-link {
    width: 100%;
    color: black;
    /* padding: 0 0 0 15px; */
  }

  .drop-down {
    position: absolute;
    z-index: 2;
    background-color: white;
    line-height: 45px;
    width: 25%;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease;
  }

  & :hover {
    cursor: pointer;

   .drop-down {
       opacity: 1;
       visibility: visible;
   }

  } 
  /* position: absolute;
  width: 90%;
  height: 70vh;
  display: flex;
  justify-content: space-between;
  padding-left: 1em;
  z-index: 3;

  
  @media screen and (max-width: 700px) { 
        position: fixed;
        padding-top: 2em;
        z-index: 3;
        background-color: white;
        width: 100%;
        overflow-x: scroll;
        overflow-y: scroll;
        top: 0;
        left: 0;
        height: 100%;
        display: flex;
        flex-direction: column;
        transform: ${({open}) => open ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 0.3s ease-in-out;
  }



  .nav-links {
      text-decoration: none;
      color: black;

      @media screen and (max-width: 700px) { 
        /* display: none; */
    }
  }

  .new-arrival {
   
  }
  
  
  .sub-links {
      position: absolute;
      height: 90%;
      width: 30vw;
      background-color: white;
      display: none;  
      z-index: 2;

      @media screen and (max-width: 700px) { 
        /* display: none; */
        width: 100%;
        height: 50%;
        
    }
  }

  .links-container {
    width: 35%;
    border: 2px solid red;


    @media screen and (max-width: 700px) { 
        /* display: none; */
      width: 100%;
    }
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

    @media screen and (max-width: 700px) { 
        display: none; 
      
    }
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
  
 

  & :hover {
    cursor: pointer;

   .sub-links {
       display: flex;
       justify-content: space-evenly;
   }

  } */

`;