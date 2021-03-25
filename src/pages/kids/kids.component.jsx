import React from 'react';
import { NewArrivalContainer } from './kids.styles';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import KidsText from '../../components/kid-text/kids-text.component';
import Footer from '../../components/footer/footer.component';



const KidArrivalPage = () => {
    return(
        <NewArrivalContainer>
              <div className=''>
                  <br/>
                  <MenLink />
                  <KidsText />
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

export default KidArrivalPage;