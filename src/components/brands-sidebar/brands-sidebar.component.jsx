import React from 'react';
import { BrandsContainer } from './brands-sidebar.styles';



const Brands = () => {
    return(
        <BrandsContainer>
              <div className='color-container'>
                  <div className='color'>
                      <h4 className='color-text'>
                         Brands
                      </h4>
                  </div>
            </div>

            <div className='line'></div>

            <form className='form-label'>

                <label className='color-label'>
                    <input type='radio' value='ADIDAS'/>
                     ADIDAS
                </label>

                <label className='color-label'>
                    <input type='radio' value='CHAMPIONS'/>
                     CHAMPIONS
                </label>

                <label className='color-label'>
                    <input type='radio' value='COLUMBIA'/>
                     COLUMBIA
                </label>

                <label className='color-label'>
                    <input type='radio' value='CONVERSE'/>
                     CONVERSE
                </label>

                <label className='color-label'>
                    <input type='radio' value='HATS'/>
                     HATS
                </label>

                <label className='color-label'>
                    <input type='radio' value='JORDAN'/>
                     JORDAN
                </label>

                <label className='color-label'>
                    <input type='radio' value='LACOSTE'/>
                     LACOSTE
                </label>

                <label className='color-label'>
                    <input type='radio' value='NEW BALANCE'/>
                     NEW BALANCE
                </label>

                <label className='color-label'>
                    <input type='radio' value='GREEN'/>
                     NIKE
                </label>

                <label className='color-label'>
                    <input type='radio' value='MULTICOLOR'/>
                     PUMA
                </label>

                <label className='color-label'>
                    <input type='radio' value='NAVY'/>
                         CROWN
                </label>

                <label className='color-label'>
                    <input type='radio' value='GRAY'/>
                     SOREL
                </label>

                <label className='color-label'>
                    <input type='radio' value='ORANGE'/>
                     ORANGE
                </label>

                <label className='color-label'>
                    <input type='radio' value='THE NORTH FACE'/>
                     THE NORTH FACE
                </label>

                <label className='color-label'>
                    <input type='radio' value='TIMBERLAND'/>
                     TIMBERLAND
                </label>

            </form>

        </BrandsContainer>
    )
}

export default Brands;