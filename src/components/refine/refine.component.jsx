import React from 'react';
import  { Link} from 'react-router-dom';
import { RefineContainer } from './refine.styles';



const Refine = () => {

	return ( 
         <RefineContainer>
             <div className='refine-container'>
                 <div className='refine-text'>
                     <h3 className='refine'>
                         Refine
                     </h3>
                 </div>

                 <div className='refine-link'>
                     <Link className='refinelink'>
                        <h6 className='view'>
                           View All 
                        </h6>
                     </Link>
                 </div>
             </div>

             <div className='line'></div>
           
        </RefineContainer>
           
	);
}; 


export default Refine;