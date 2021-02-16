import styled from 'styled-components';


export const FeaturedContainer = styled.div`
 width: 100%;
 background-color: #F2F2F2;

 .featured-text {
     text-align: center;
 }

 .image-container {
     display: flex;
     justify-content: space-around;
 }

 .jordan {
     width: 20%;
 }

 .ultra {
     width: 20%;
 }

 .usa {
     width: 20%;
 }

 .new-balance {
     width: 20%;
 }

 .nav-link {
     display: flex;
     justify-content: center;
     text-align: center;
 }

 img {
    width: 100%;
    height: 80%;
}

&:hover {
    .image {
        opacity: 0.6;
    }

`;