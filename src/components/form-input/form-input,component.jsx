import React from 'react';
import { FormContainer } from './form-input.styles';



const FormInput = ({handleChange, label, ...otherprops}) => {
    return(
        <FormContainer>
            <div className='group'>
                <input className='form-input' onChange={handleChange} {...otherprops}/>
                {
                    label ? <label className={`${otherprops.value.length} ? 'shrink' : ''} form-input-label`}>{label}</label> : null
                }
            </div>
        </FormContainer>
    )
}

export default FormInput;