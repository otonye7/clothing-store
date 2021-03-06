import React from 'react';
import { LogInContainer } from './login-form.styles';
import { Link } from 'react-router-dom';
import FormInput from '../form-input/form-input,component';
import CustomButton from '../custom-button/custom-button.component';
import {auth, signInWithGoogle} from '../../firebase/firebase.utils.js';


class LogIn extends React.Component {
    constructor(props) {
        super(props) 

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async e => {
        e.preventDefault();

        const {email, password} = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({email: '', password: ''});
            
        } catch(error) {
            console.log(error);
        }

        
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
                    <CustomButton className='sign' type='submit' value='Submit Form'>SIGN IN</CustomButton>
                    <CustomButton className='sign-g' onClick={signInWithGoogle} value='Submit Form'>SIGN IN WITH GOOGLE</CustomButton>
                    </div>
                </form>
                <Link to='/signup' className='sign-up'>
                     Don't have an account? Sign Up
                </Link>
            </div>
            </LogInContainer>
        )
    }
}

export default LogIn;