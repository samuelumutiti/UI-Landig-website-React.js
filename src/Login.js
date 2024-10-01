import React from 'react'
import google from './icons/facebook.png';
import facebook from './icons/google.png';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <div className='containers'>
        <h1>Welcome Back</h1>
        <p className='para'>Welcome Back, Please enter your details</p>
        <button className='facebook'><img src={google}/><p>SignIn With Google</p></button>
        <button className='google'><img src={facebook}/><p>SignIn With Google</p></button>
        <center><span>Or</span></center>
        <form action='' method='' autoComplete='off'>
            <input type='email' name='email' placeholder='Enter your email'/><br/><br/>
            <input type='password' name='password' placeholder='Enter your password'/><br/><br/>
            <button type='submit' name='submit'>Sign In</button><br/>
            <center>
            <small>By continuing, you agree to Coksine Terms of Services and acknowledge you've read our Privacy Policy, Notice at collection.</small><br/><br/>
              <Link to="/signup" className='link'><small>Already have an account <a href=''>Sign Up</a></small></Link>
            </center>
        </form>
      </div>
    </div>
  )
}

export default Login
