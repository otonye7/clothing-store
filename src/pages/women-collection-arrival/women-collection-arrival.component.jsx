import React from 'react';
import { NewArrivalContainer } from './women-collection-arrival.styles';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import WomenText from '../../components/women-text/women-text.component';
import WomenCollections from '../../components/women-collections/women-collection-categories.component';
import Footer from '../../components/footer/footer.component';



const WomenCollectionPage = () => {
    return(
        <NewArrivalContainer>
              <div className=''>
                  <br/>
                  <MenLink />
                  <WomenText />
                  <br />
                  <br />
                  <WomenCollections />
              </div> 
              <br />
            <br />
             <div className='footer'>
              <Footer />
            </div> 
        </NewArrivalContainer>
    )
}

export default WomenCollectionPage;