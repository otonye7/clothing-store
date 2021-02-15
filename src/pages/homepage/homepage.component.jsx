import React from 'react';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/subheader/subheader.component';
import Hero from '../../components/hero/hero.component';
import SubHero from '../../components/sub-hero/sub-hero.component';

const Homepage = () => {

	return ( 
         
           <div>
              <Header />
              <SubHeader />
              <br />
              <Hero />
              <SubHero />
            </div>
           
	);
}; 


export default Homepage;