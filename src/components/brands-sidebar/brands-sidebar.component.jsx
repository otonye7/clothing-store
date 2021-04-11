import React from 'react';
import { BrandsContainer } from './brands-sidebar.styles';




const Brands = ({ sections, filterBrands, handleChange}) => {

    console.log(filterBrands)

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

            <form className='form-label' filterBrands={filterBrands} onClick={handleChange}>

                <label className='color-label'>
                    <input type='radio' checked={filterBrands === 'ADIDAS'} value='ADIDAS'/>
                     ADIDAS
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterBrands === 'CHAMPIONS'} value='CHAMPIONS'/>
                     CHAMPIONS
                </label>

                <label className='color-label'>
                    <input type='radio' checked={sections === 'COLUMBIA'} value='COLUMBIA'/>
                     COLUMBIA
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterBrands === 'CONVERSE'} value='CONVERSE'/>
                     CONVERSE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterBrands === 'HATS'} value='HATS'/>
                     HATS
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterBrands === 'JORDAN'} value='JORDAN'/>
                     JORDAN
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterBrands === 'LACOSTE'} value='LACOSTE'/>
                     LACOSTE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterBrands === 'NEW BALANCE'} value='NEW BALANCE'/>
                     NEW BALANCE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterBrands === 'NIKE'} value='NIKE'/>
                     NIKE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterBrands === 'PUMA'} value='PUMA'/>
                     PUMA
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterBrands === 'CROWN'} value='CROWN'/>
                         CROWN
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterBrands === 'SOREL'} value='SOREL'/>
                     SOREL
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterBrands === 'ORANGE'} value='ORANGE'/>
                     ORANGE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterBrands === 'THE NORTH FACE'} value='THE NORTH FACE'/>
                     THE NORTH FACE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterBrands === 'TIMBERLAND'} value='TIMBERLAND'/>
                     TIMBERLAND
                </label>

            </form>

        </BrandsContainer>
    )
}

export default Brands;