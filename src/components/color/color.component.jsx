import React from 'react';
import { ColorContainer } from './color.styles';
import Brands from '../../components/brands-sidebar/brands-sidebar.component.jsx';
import Shoe from '../../components/shoe/shoe.component';
import MenTop from '../../components/men-top/men-top.component';
import MenBottom from '../../components/men-bottom/men-bottom.component';



const Color = () => {
    return(
        <ColorContainer>
              <div className='color-container'>
                  <div className='color'>
                      <h3 className='color-text'>
                         Color
                      </h3>
                  </div>
            </div>

            <div className='line'></div>

            <form className='form-label'>

                <label className='color-label'>
                    <input type='radio' value='BIEGE'/>
                     BIEGE
                </label>

                <label className='color-label'>
                    <input type='radio' value='BLACK'/>
                     Black
                </label>

                <label className='color-label'>
                    <input type='radio' value='BLUE'/>
                     BLUE
                </label>

                <label className='color-label'>
                    <input type='radio' value='BROWN'/>
                     BROWN
                </label>

                <label className='color-label'>
                    <input type='radio' value='BURGUNDY'/>
                     BURGUNDY
                </label>

                <label className='color-label'>
                    <input type='radio' value='CREAM'/>
                     CREAM
                </label>

                <label className='color-label'>
                    <input type='radio' value='GOLD'/>
                     GOLD
                </label>

                <label className='color-label'>
                    <input type='radio' value='GRAY'/>
                     GRAY
                </label>

                <label className='color-label'>
                    <input type='radio' value='GREEN'/>
                     GREEN
                </label>

                <label className='color-label'>
                    <input type='radio' value='MULTICOLOR'/>
                     MULTICOLOR
                </label>

                <label className='color-label'>
                    <input type='radio' value='NAVY'/>
                     NAVY
                </label>

                <label className='color-label'>
                    <input type='radio' value='GRAY'/>
                     GRAY
                </label>

                <label className='color-label'>
                    <input type='radio' value='ORANGE'/>
                     ORANGE
                </label>

                <label className='color-label'>
                    <input type='radio' value='PURPLE'/>
                     PURPLE
                </label>

                <label className='color-label'>
                    <input type='radio' value='RED'/>
                     RED
                </label>

                <label className='color-label'>
                    <input type='radio' value='WHITE'/>
                     WHITE
                </label>

                <label className='color-label'>
                    <input type='radio' value='YELLOW'/>
                     YELLOW
                </label>

            </form>

            <div className='brand'>
                <Brands />
            </div>

            <div className='shoe'>
                <Shoe />
            </div>

            <div className='men-top'>
                <MenTop />
            </div>

            <div className='men-bottom'>
                <MenBottom />
            </div>

        </ColorContainer>
    )
}

export default Color;