import React from 'react';
import Header from '../../components/header/header.component';
import { ColumbiaContainer } from './columbia.styles';
import SubHeader from '../../components/subheader/subheader.component';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import ColumbiaText from '../../components/columbia-text/columbia-text.component';
import ColumbiaCategories from '../../components/columbia-categories/columbia-categories.component';
import Footer from '../../components/footer/footer.component';

const ColumbiaPage = () => {

	return ( 
         <ColumbiaContainer>
           <div className='overall-container'>
             <div className='headers'>
               <Header />
               <SubHeader />
             </div>
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