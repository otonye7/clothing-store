import React from 'react';
import { MentopContainer } from './men-top.styles';


const MenTop = () => {
    return(
        <MentopContainer>
              <div className='color-container'>
                  <div className='color'>
                      <h3 className='color-text'>
                         Men Top
                      </h3>
                  </div>
            </div>

            <div className='line'></div>

            <form className='form-label'>

                <label className='color-label'>
                    <input type='radio' value='S'/>
                     S
                </label>

                <label className='color-label'>
                    <input type='radio' value='M'/>
                     M
                </label>

                <label className='color-label'>
                    <input type='radio' value='L'/>
                     L
                </label>

                <label className='color-label'>
                    <input type='radio' value='XL'/>
                     XL
                </label>

                <label className='color-label'>
                    <input type='radio' value='XXL'/>
                     XXL
                </label>

            </form>

        </MentopContainer>
    )
}

export default MenTop;