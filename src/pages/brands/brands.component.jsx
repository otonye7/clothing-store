import React from 'react';
import { NewArrivalContainer } from './brands.styles';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import BrandsText from '../../components/brands-text/brands-text.component';
import Footer from '../../components/footer/footer.component';



const BrandsArrivalPage = () => {
    return(
        <NewArrivalContainer>
              <div className=''>
                  <br/>
                  <MenLink />
                  <BrandsText />
                  <br />
                  <br />
              </div>
              <br />
            <br />
             <div className='footer'>
              <Footer />
            </div> 
        </NewArrivalContainer>
    )
}

export default BrandsArrivalPage;