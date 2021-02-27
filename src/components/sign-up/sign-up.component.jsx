import React from 'react';
import { SignUpContainer } from './sign-up.styles';
import { Link } from 'react-router-dom';
import FormInput from '../form-input/form-input,component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';


class SignUp extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
          displayName: '',
          email: '',
          password: '',
          confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();

        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert("Password don't match. Please try again");
            return;
        }

        try {
           const {user} = auth.createUserWithEmailAndPassword(email, password);

           await createUserProfileDocument(user, {displayName});

           this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
           })
        } catch(error) {
            console.log(error)
        }
    }

    handleChange = event => {
        const {name, value} = event.target;

        this.setState({[name]: value})
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <SignUpContainer>
            <div className='sign-up'>
                <h2 className='title'>SIGN UP</h2>

                <form className='sign-up-form' onSubmit={this.handleSubmit}>
                    <FormInput type='text' name='displayName' value={displayName} onChange={this.handleChange} label='Display Name' required/>
                    <FormInput type='email' name='email' value={email} onChange={this.handleChange} label='Email' required/>
                    <FormInput type='password' name='password' value={password} onChange={this.handleChange} label='Password' required/>
                    <FormInput type='password' name='confirm password' value={confirmPassword} onChange={this.handleChange} label='Confirm Password' required/>
                    <div className='buttons'>
                       <CustomButton type='submit' value='Submit Form'>SIGN UP</CustomButton>
                    </div>
                </form>
            </div>
            </SignUpContainer>
        )
    }
}

export default SignUp;