import React from 'react';
import { Route } from 'react-router-dom';
import { MenContainer } from './men-new-arrival.styles';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import MenText from '../../components/men-new-arrival-text/men-new-arrival-text.component';
import MenCategories from '../../components/men-arrival-categories/men-arrival-categories.component';
import Footer from '../../components/footer/footer.component';
import GazellePage from '../men-adidas-originals-gazelle-shoes-burgundy/men-adidas-originals-gazelle-shoes-burgundy.component';

const MenPage = ({match}) => {
  
	return ( 
         <MenContainer>
           <div className='overall-container'>
              <br />
              <MenLink />
              <MenText />
              <br />
              <br />
              <div className='sub-container'>
                  {/* <MenCategories />  */}
                  <Route exact path={`${match.path}`} component={MenCategories} />
                  <Route path={`${match.path}/:collectionId`} component={GazellePage} />
              </div>
            </div>
            <div className='footer'>
              <Footer />
            </div>
            </MenContainer>
           
	);
}; 


export default MenPage;