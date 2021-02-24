import React from 'react';
import { SignInContainer } from './sign-in.styles';
import Header from '../../components/header/header.component';
import SubHeader from '../../components/subheader/subheader.component';
import LogIn from '../../components/login-form/login-form.component';


const SignIn = () => {
    return(
        <SignInContainer>
            <Header />
            <SubHeader />
            <div className='login-container'>
                <LogIn />
            </div>
        </SignInContainer>
    )
}

export default SignIn;

