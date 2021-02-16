import React from 'react';
import { FooterContainer} from './footer.styles';

const Footer = () => {
    return (
        <FooterContainer>
            <div className='footer-container'>
           <div className='container'>
               <div className='city'>
                   <h3 className='title'>About Us</h3>
               </div>
               <div className='list'>
                   <span>Press</span>
               </div>
               <div className='list'>
                   <span>Store Location</span>
               </div>
               <div className='list'>
                   <span>News</span>
               </div>
           </div>

           <div className='cuisine-container'>
               <div className='cuisine'>
                   <h3 className='title'>FAQ</h3>
               </div>
               <div className='list'>
                   <span>Shopping Policy</span>
               </div>
               <div className='list'>
                   <span>Return Policy</span>
               </div>
               </div>

               <div className='vendors-container'>
               <div className='vendors'>
                   <h3 className='title'>Return Shipping</h3>
               </div>
               <div className='list'>
                   <span>Contact</span>
               </div>
           </div>

           <div className='jumia-container'>
               <div className='jumia'>
                   <h3 className='title'>Social Media</h3>
               </div>
               <div className='list'>
                   <span>Twitter</span>
               </div>
           </div>
           </div>

           <div className='samo-foods'>
               <h6>© Copyright 2021 S^mo Clothes is a registered trademark</h6>
           </div>
        </FooterContainer>
    )
};

export default Footer;