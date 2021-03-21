import styled from 'styled-components';
import Jordan from  '../../assets/adidas-boost.jpg';
import Adidas from  '../../assets/Matchcourt.jpg';
import NewBalance from '../../assets/women-adidas-pink.jpg';
import Gazelle from '../../assets/r1.jpg';
import Doublemax from '../../assets/doublemax.jpg';


export const SalesContainer = styled.div`
   width: 95%;
    padding-top: 8rem;
   display: flex;
   justify-content: space-around;
   margin: 0 auto;
   

   .image {
    width: 350px;
    height: 15rem;
    background-image: url(${Jordan});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 767px){
      height: 14rem;
      width: 250px;
}

   }

   .second-image {
    width: 350px;
    height: 15rem;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;
    

    @media screen and (max-width: 767px){
      height: 14rem;
      width: 250px;
}

}
    
   .third-image {
    width: 350px;
    height: 15rem;
    background-image: url(${NewBalance});
    background-position: center;
    background-size: cover;

    @media screen and (max-width: 767px){
      height: 14rem;
      width:  250px;
}

   }

   .fourth-image {
    width: 350px;
    height: 15rem;
    background-image: url(${Gazelle});
    background-position: center;
    background-size: cover;
   
    @media screen and (max-width: 767px){
      height: 14rem;
      width:  250px;
}
   }

   .fifth-image {
    width: 350px;
    height: 16rem;
    background-image: url(${Doublemax});
    background-position: center;
    background-size: cover;

   @media screen and (max-width: 767px){
      height: 10rem;
      width: 250px;
}

   }

`;