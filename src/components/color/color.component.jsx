import React from 'react';
import { ColorContainer } from './color.styles';



const Color = ({handleInput, filteredSection}) => {

    return(
        <ColorContainer>
              <div className='color-container'>
                  <div className='color'>
                      <h4 className='color-text'>
                         Color
                      </h4>
                  </div>
            </div>

            <div className='line'></div>

            <form className='form-label' filteredSection={filteredSection} onChange={handleInput}>

                <label className='color-label' >
                    <input type='radio' checked={filteredSection === 'BIEGE'} value='BIEGE'/>
                     BIEGE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'BLACK'} value='BLACK'/>
                     Black
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'BLUE'} value='BLUE'/>
                     BLUE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'BROWN'} value='BROWN'/>
                     BROWN
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'BURGUNDRY'} value='BURGUNDY'/>
                     BURGUNDY
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'CREAM'} value='CREAM'/>
                     CREAM
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'GOLD'} value='GOLD'/>
                     GOLD
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'GRAY'}  value='GRAY'/>
                     GRAY
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'GREEN'} value='GREEN'/>
                     GREEN
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'MULTICOLOR'} value='MULTICOLOR'/>
                     MULTICOLOR
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'NAVY'} value='NAVY'/>
                     NAVY
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'GRAY'} value='GRAY'/>
                     GRAY
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'ORANGE'} value='ORANGE'/>
                     ORANGE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'PURPLE'} value='PURPLE'/>
                     PURPLE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'RED'} value='RED'/>
                     RED
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'WHITE'} value='WHITE'/>
                     WHITE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredSection === 'YELLOW'} value='YELLOW'/>
                     YELLOW
                </label>

            </form>

        </ColorContainer>
    )
}

export default Color;