import styled from 'styled-components';
import Jordan from  '../../assets/jordan-zoom.jpg';
import Adidas from  '../../assets/oc.jpg';
import NewBalance from '../../assets/delta.jpg';
import Gazelle from '../../assets/jordandelta.jpg';


export const SalesContainer = styled.div`
 width: 100%;
   height: 18rem;
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