import React from 'react';
import { SignInContainer } from './sign-in.styles';
import LogIn from '../../components/login-form/login-form.component';
import Footer from '../../components/footer/footer.component';


const SignIn = () => {
    return(
        <SignInContainer>
            <div className='login-container'>
                <LogIn />
            </div>
            <div className='footer'>
                <Footer />
            </div>
        </SignInContainer>
    )
}

export default SignIn;

