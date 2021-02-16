import React from 'react';
import { AboutContainer } from './about.styles';



const About = () => {
    return(
        <AboutContainer>
            <div className ='overall'>
              <div className='about-container'>
                  <h2 className='about-text'>
                      About US
                  </h2>
               </div>

               <div className='span-container'>
                  <span className='about-span'>
                       S^Mo SPORTS WAS FOUNDED IN 1995 IN Nigeria,
                       Lagos WITH THE MISSION TO PROVIDE PREMIUM
                       QUALITY SPORTSWEAR WITH DEDICATED CUSTOMER SERVICE.
                       SHOP OUR COLLECTION ONLINE OR VISIT ONE OF OUR LEKKI
                       STORES FOR ICONIC BRANDS AND LIMITED RELEASES FOR MEN, WOMEN
                       AND KIDS.
                  </span>
              </div>
              </div>
        </AboutContainer>
    )
}

export default About;