import React from 'react';
import { LogInContainer } from './login-form.styles';
import FormInput from '../form-input/form-input,component';
import CustomButton from '../custom-button/custom-button.component';
import {signInWithGoogle} from '../../firebase/firebase.utils.js';


class LogIn extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = e => {
        const {value, name} = e.target;
        this.setState({ [name]: value})
    }

    render() {
        return(
            <LogInContainer>
            <div className='sign-in'>
                <h2>Login</h2>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='Email' required/>
                    <label></label>
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='Password' required/>
                    <label></label>
                     <div className='buttons'>
                    <CustomButton type='submit' value='Submit Form'>SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} value='Submit Form'>SIGN IN With Google</CustomButton>
                    </div>
                </form>
            </div>
            </LogInContainer>
        )
    }
}

export default LogIn;