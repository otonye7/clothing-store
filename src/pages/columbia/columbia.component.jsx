import React from 'react';
import { ColumbiaContainer } from './columbia.styles';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import ColumbiaText from '../../components/columbia-text/columbia-text.component';
import ColumbiaCategories from '../../components/columbia-categories/columbia-categories.component';
import Footer from '../../components/footer/footer.component';

const ColumbiaPage = () => {

	return ( 
         <ColumbiaContainer>
           <div className='overall-container'>
              <br />
              <MenLink />
              <ColumbiaText />
              <br />
              <br />
              <div className='sub-container'>
                <ColumbiaCategories />
              </div>
            </div>
            <div className='footer'>
               <Footer />
            </div>
            </ColumbiaContainer>
           
	);
}; 


export default ColumbiaPage;