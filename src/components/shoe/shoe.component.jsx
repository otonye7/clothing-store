import React from 'react';
import { ShoeContainer } from './shoe.styles';


const Shoe = () => {
    return(
        <ShoeContainer>
              <div className='color-container'>
                  <div className='color'>
                      <h3 className='color-text'>
                         Shoe Size
                      </h3>
                  </div>
            </div>

            <div className='line'></div>

            <form className='form-label'>

                <label className='color-label'>
                    <input type='radio' value='seven'/>
                     7
                </label>

                <label className='color-label'>
                    <input type='radio' value='seven-five'/>
                     7.5
                </label>

                <label className='color-label'>
                    <input type='radio' value='eight'/>
                     8
                </label>

                <label className='color-label'>
                    <input type='radio' value='eight-five'/>
                     8.5
                </label>

                <label className='color-label'>
                    <input type='radio' value='nine'/>
                     9
                </label>

                <label className='color-label'>
                    <input type='radio' value='nine-five'/>
                     9.5
                </label>

                <label className='color-label'>
                    <input type='radio' value='ten'/>
                     10
                </label>

                <label className='color-label'>
                    <input type='radio' value='ten-five'/>
                     10.5
                </label>

                <label className='color-label'>
                    <input type='radio' value='eleven'/>
                     11
                </label>

                <label className='color-label'>
                    <input type='radio' value='twelve'/>
                     12
                </label>

                <label className='color-label'>
                    <input type='radio' value='thirteen'/>
                     13
                </label>

                <label className='color-label'>
                    <input type='radio' value='fourteen'/>
                     14
                </label>

            </form>

        </ShoeContainer>
    )
}

export default Shoe;