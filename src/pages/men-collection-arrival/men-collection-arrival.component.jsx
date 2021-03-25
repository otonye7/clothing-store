import React from 'react';
import { NewArrivalContainer } from './men-collection-arrival.styles';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import MenText from '../../components/men-text/men-text.component';
import MensCollections from '../../components/men-collections/men-collection-categories.component';
import Footer from '../../components/footer/footer.component';



const MenCollectionPage = () => {
    return(
        <NewArrivalContainer>
              <div className=''>
                  <br/>
                  <MenLink />
                  <MenText />
                  <br />
                  <br />
                  <MensCollections />
              </div> 
              <br />
            <br />
             <div className='footer'>
              <Footer />
            </div> 
        </NewArrivalContainer>
    )
}

export default MenCollectionPage;