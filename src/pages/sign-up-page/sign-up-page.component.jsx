import React from 'react';
import { SignUpContainer } from './sign-up-page.styles';
import SignUp from '../../components/sign-up/sign-up.component';
import Footer from '../../components/footer/footer.component';


const SignUpPage = () => {
    return(
        <SignUpContainer>
            <div className='login-container'>
              <SignUp />
            </div>
            <div className='footer'>
               <Footer />
            </div>
        </SignUpContainer>
    )
}

export default SignUpPage;