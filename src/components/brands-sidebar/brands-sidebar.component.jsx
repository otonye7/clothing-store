import React from 'react';
import { BrandsContainer } from './brands-sidebar.styles';



const Brands = ({ handleInputBrands, filteredBrands}) => {

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

            <form className='form-label' filteredBrands={filteredBrands} onChange={handleInputBrands}>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'ADIDAS'} value='ADIDAS'/>
                     ADIDAS
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'CHAMPIONS'} value='CHAMPIONS'/>
                     CHAMPIONS
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'COLUMBIA'} value='COLUMBIA'/>
                     COLUMBIA
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'CONVERSE'} value='CONVERSE'/>
                     CONVERSE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'HATS'} value='HATS'/>
                     HATS
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'JORDAN'} value='JORDAN'/>
                     JORDAN
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'LACOSTE'} value='LACOSTE'/>
                     LACOSTE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'NEW BALANCE'} value='NEW BALANCE'/>
                     NEW BALANCE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'NIKE'} value='NIKE'/>
                     NIKE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'PUMA'} value='PUMA'/>
                     PUMA
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'CROWN'} value='CROWN'/>
                         CROWN
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'SOREL'} value='SOREL'/>
                     SOREL
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'ORANGE'} value='ORANGE'/>
                     ORANGE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'THE NORTH FACE'} value='THE NORTH FACE'/>
                     THE NORTH FACE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filteredBrands === 'TIMBERLAND'} value='TIMBERLAND'/>
                     TIMBERLAND
                </label>

            </form>

        </BrandsContainer>
    )
}

export default Brands;