import React from 'react';
import { NewArrivalContainer } from './sales-arrival.styles';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import SalesText from '../../components/sales-text/sales-text.component';
import SalesCategories from '../../components/sales-categories/sales-categories.component';
import Footer from '../../components/footer/footer.component';



const SalesPage = () => {
    return(
        <NewArrivalContainer>
              <div className=''>
                  <br/>
                  <MenLink />
                  <SalesText />
                  <br />
                  <br />
                  <SalesCategories />
              </div>
              <br />
            <br />
             <div className='footer'>
              <Footer />
            </div> 
        </NewArrivalContainer>
    )
}

export default SalesPage;