import React from 'react';
import Header from '../../components/header/header.component';
import { NewBalanceContainer } from './new-balance-arrival.styles';
import SubHeader from '../../components/subheader/subheader.component';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import NewBalanceText from '../../components/new-balance-arrival-text/new-balance-arrival-text.component';
import NewBalanceCategories from '../../components/new-balance-arrival-categories/new-balance-arrival-categories.component';
import Footer from '../../components/footer/footer.component';

const NewBalancePage = () => {

	return ( 
         <NewBalanceContainer>
           <div className='overall-container'>
             <div className='headers'>
               <Header />
               <SubHeader />
             </div>
              <br />
              <MenLink />
              <NewBalanceText />
              <br />
              <br />
              <div className='sub-container'>
                <NewBalanceCategories />
              </div>
            </div>
            <div className='footer'>
              <Footer />
            </div>
            </NewBalanceContainer>
           
	);
}; 


export default NewBalancePage;