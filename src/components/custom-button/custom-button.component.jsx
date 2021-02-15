import React from 'react';
import {CustomButtonContainer} from './custom-button.styles';
import PropTypes from 'prop-types';

const CustomButton = () => (
    <CustomButtonContainer>
        <button>
            
        </button>
    </CustomButtonContainer>
)

CustomButton.propTypes = {
	children: PropTypes.string
};

export default CustomButton;