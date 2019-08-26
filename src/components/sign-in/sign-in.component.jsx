import React from 'react'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { signInWithGoogle } from "../../firebase/firebase.utils";


import './sign-in.styles.scss'

class SignIn extends React.Component {
  constructor(){
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault()

    this.setState({email: '', password: ''})
  }

  handleChange = event => {
    const { value, name } = event

    this.setState({[name]: value})

  }

  render(){
    return(
        <div className={'sign-in'}>
          <h2>I have have an Account</h2>
          <span>Sign in with your email and password</span>

          <form onSubmit={this.handleSubmit}>
            <FormInput
                name='email'
                type='email'
                label='Email'
                handleChange={this.handleChange}
                value={this.state.email}
                required
            />
            <FormInput
                name='password'
                type='password'
                value={this.state.email}
                label='password'
                handleChange={this.handleChange}
                required
            />

            <div className={'buttons'}>
              <CustomButton type='submit'>Sign In</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
            </div>
          </form>

        </div>
    )
  }

}

export default SignIn
