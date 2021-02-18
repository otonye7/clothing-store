import React from 'react';
import { MenbottomContainer } from './men-bottom.styles';


const MenBottom = () => {
    return(
        <MenbottomContainer>
              <div className='color-container'>
                  <div className='color'>
                      <h3 className='color-text'>
                         Men Bottom
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

        </MenbottomContainer>
    )
}

export default MenBottom;