import React from 'react';
import {CustomButtonContainer} from './custom-button.styles';

const CustomButton = ({children, ...otherProps}) => (
    <CustomButtonContainer>
        <button className='custom-button' {...otherProps}>
            {children}
        </button>
    </CustomButtonContainer>
)

export default CustomButton;