import React from 'react';
import { SignInContainer } from './sign-in.styles';
import LogIn from '../../components/login-form/login-form.component';


const SignIn = () => {
    return(
        <SignInContainer>
            <div className='login-container'>
                <LogIn />
            </div>
        </SignInContainer>
    )
}

export default SignIn;

