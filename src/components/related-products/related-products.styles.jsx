import styled from 'styled-components';


export const RelatedProductContainer = styled.div`
 .related-title {
     font-weight: 500;
     padding-top: 5rem;
     padding-bottom: 2rem;
 }

 .related {
    font-weight: 500;
     visibility: hidden;
 @media screen and (max-width: 767px){
    visibility: visible;
}
 }

`;