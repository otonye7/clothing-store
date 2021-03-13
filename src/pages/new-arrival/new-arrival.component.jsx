import React from 'react';
import { NewArrivalContainer } from './new-arrival.styles';
import { Route } from 'react-router-dom';
import MenLink from '../../components/men-link-hero/men-link-hero.component';
import NewText from '../../components/new-arrival-text/new-arrival-text.component';



const NewArrivalPage = () => {
    return(
        <NewArrivalContainer>
              <div className=''>
                  <br/>
                  <MenLink />
                  <NewText />
              </div>
        </NewArrivalContainer>
    )
}

export default NewArrivalPage;