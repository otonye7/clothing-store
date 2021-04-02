import React from 'react';
import { ColumbiaContainer } from './columbia.styles';
import { Route } from 'react-router-dom';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import ColumbiaText from '../../components/columbia-text/columbia-text.component';
import ColumbiaCategories from '../../components/columbia-categories/columbia-categories.component';
import ColumbiaGreyPage from '../columbia-grey-tropical/columbia-grey-tropical.component';
import ColumbiaBlackPage from '../columbia-black-tropical/columbia-black-tropical.component';
import ColumbiaJacketNavyPage from '../columbia-jacket-navy/columbia-jacket-navy.component';
import ColumbiaWindBreakerPage from '../columbia-windbreaker/columbia-windbreaker.component';
import ColumbiaMultiColorPage from '../columbia-multicolor/columbia-multicolor.component';
import ColumbiaWaterTightPage from '../columbia-watertight/columbia-watertight.component';
import ColumbiaJacketBlackPage from '../columbia-jacket-black/columbia-jacket-black.component';
import ColumbiaGreenJacketPage from '../columbia-green-jacket/columbia-green-jacket.component';
import Footer from '../../components/footer/footer.component';

const ColumbiaPage = ({match}) => {

	return ( 
         <ColumbiaContainer>
           <div className='overall-container'>
              <br />
              <MenLink />
              <ColumbiaText />
              <br />
              <br />
              <div className='sub-container'>
                {/* <ColumbiaCategories /> */}
                <Route exact path={`${match.path}`} component={ColumbiaCategories} />
                <Route path={`${match.path}/:mens-columbia-flash-forward-print-windbreaker-grey-tropical`} component={ColumbiaGreyPage} />
                <Route path={`${match.path}/:mens-columbia-flash-black-tropical`} component={ColumbiaBlackPage} />
                <Route path={`${match.path}/:womens-columbia-poe-creek-jacket-navy`} component={ColumbiaJacketNavyPage} />
                <Route path={`${match.path}/:womens-columbia-side-hill-printed-windbreaker-white`} component={ColumbiaWindBreakerPage} />
                <Route path={`${match.path}/:columbia-multicolor`} component={ColumbiaMultiColorPage} />
                <Route path={`${match.path}/:mens-columbia-watertight-II-jacket-dark-purple`} component={ColumbiaWaterTightPage} />
                <Route path={`${match.path}/:mens-columbia-watertight-II-jacket-black`} component={ColumbiaJacketBlackPage} />
                <Route path={`${match.path}/:mens-columbia-bugaboo-1986-interchange-jacket-green`} component={ColumbiaGreenJacketPage} />
              </div>
            </div>
            <br />
            <br />
            <br />
            <div className='footer'>
               <Footer />
            </div>
            </ColumbiaContainer>
           
	);
}; 


export default ColumbiaPage;