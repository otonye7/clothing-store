import React from 'react';
import { BrandsContainer } from './brands-sidebar.styles';




const Brands = ({ filterSections}) => {
console.log(filterSections)

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

            <form className='form-label' filterSections={filterSections} onChange={(e) => filterSections(e.target.value)}>

                <label className='color-label'>
                    <input type='radio' checked={filterSections === 'ADIDAS'} value='ADIDAS'/>
                     ADIDAS
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterSections === 'CHAMPIONS'} value='CHAMPIONS'/>
                     CHAMPIONS
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterSections === 'COLUMBIA'} value='COLUMBIA'/>
                     COLUMBIA
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterSections === 'CONVERSE'} value='CONVERSE'/>
                     CONVERSE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterSections === 'HATS'} value='HATS'/>
                     HATS
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterSections === 'JORDAN'} value='JORDAN'/>
                     JORDAN
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterSections === 'LACOSTE'} value='LACOSTE'/>
                     LACOSTE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterSections === 'NEW BALANCE'} value='NEW BALANCE'/>
                     NEW BALANCE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterSections === 'NIKE'} value='NIKE'/>
                     NIKE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterSections === 'PUMA'} value='PUMA'/>
                     PUMA
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterSections === 'CROWN'} value='CROWN'/>
                         CROWN
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterSections === 'SOREL'} value='SOREL'/>
                     SOREL
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterSections === 'ORANGE'} value='ORANGE'/>
                     ORANGE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterSections=== 'THE NORTH FACE'} value='THE NORTH FACE'/>
                     THE NORTH FACE
                </label>

                <label className='color-label'>
                    <input type='radio' checked={filterSections === 'TIMBERLAND'} value='TIMBERLAND'/>
                     TIMBERLAND
                </label>

            </form>

        </BrandsContainer>
    )
}

export default Brands;