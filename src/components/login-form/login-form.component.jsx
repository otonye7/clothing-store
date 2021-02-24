import React from 'react';
import { LogInContainer } from './login-form.styles';



const LogIn = () => {
    return(
        <LogInContainer>
           <div className='login'>
               <h2 className='login-text'>
                   Login
               </h2>
           </div>
        </LogInContainer>
    )
}

export default LogIn;