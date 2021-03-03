import React from 'react';
import { GazelleContainer } from './men-adidas-originals-gazelle-shoes-burgundy.styles';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {menSectionsFilter} from '../../redux/men-arrival/men-arrival.selector';
import MenuItems from '../../components/menu-items/menu-items.component';

const GazellePage = ({match, sections}) => {
    console.log(sections)
      return ( 
           <GazelleContainer>
              <div className='container'>
                  
              </div>
            </GazelleContainer>
             
      );
  }; 
  
  const mapStateToProps = createStructuredSelector({
    sections : menSectionsFilter
  })
  
  export default connect(mapStateToProps)(GazellePage);