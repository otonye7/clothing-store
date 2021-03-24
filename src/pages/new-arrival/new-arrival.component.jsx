import React from 'react';
import { NewArrivalContainer } from './new-arrival.styles';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import NewText from '../../components/new-arrival-text/new-arrival-text.component';
import NewCategories from '../../components/new-arrival-categories/new-arrival-categories.component';
import Footer from '../../components/footer/footer.component';



const NewArrivalPage = () => {
    return(
        <NewArrivalContainer>
              <div className=''>
                  <br/>
                  <MenLink />
                  <NewText />
                  <br />
                  <br />
                  <NewCategories />
              </div>
              <br />
            <br />
             <div className='footer'>
              <Footer />
            </div> 
        </NewArrivalContainer>
    )
}

export default NewArrivalPage;