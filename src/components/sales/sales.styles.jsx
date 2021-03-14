import styled from 'styled-components';
import Jordan from  '../../assets/wc.jpg';
import Adidas from  '../../assets/oc.jpg';
import NewBalance from '../../assets/gcol.jpg';
import Gazelle from '../../assets/gazelle.jpg';


export const SalesContainer = styled.div`
 width: 100%;
   height: 45vh;
   display: flex;
   justify-content: space-around;

   .image {
    width: 20%;
    height: 100%;
    background-image: url(${Jordan});
    background-position: center;
    background-size: cover;

   }

   .second-image {
    width: 20%;
    height: 100%;
    background-image: url(${Adidas});
    background-position: center;
    background-size: cover;


}
    
   .third-image {
    width: 20%;
    height: 100%;
    background-image: url(${NewBalance});
    background-position: center;
    background-size: cover;

   }

   .fourth-image {
    width: 20%;
    height: 100%;
    background-image: url(${Gazelle});
    background-position: center;
    background-size: cover;

   }

`;