import React from 'react'
import google from './icons/facebook.png';
import facebook from './icons/google.png';
import './Signup.css'
import { Link } from 'react-router-dom';

const SignUp = () => {
  return (
    <div>
      <div className='containers'>
        <h1>Create your account</h1>
        <p className='para'>Let's get started with your 30 days free trial</p>
        <button className='facebook'><img src={google}/><p>SignUp With Google</p></button>
        <button className='google'><img src={facebook}/><p>SignUp With Google</p></button>
        <center><span>Or</span></center>
        <form action='' method='' autoComplete='off'>
            <input type='text' name='name' placeholder='Enter your name'/><br/>
            <input type='email' name='email' placeholder='Enter your email'/><br/>
            <input type='password' name='password' placeholder='Enter your password'/>
            <div className='checked'>
              <input type='checkbox' name='checked'/>
              <span>I agree to all Term, Privacy Policy ad Fees.</span>
            </div>
            <button type='submit' name='submit'>Sign Up</button><br/>
            {/* <p>By continuing, you agree to Coksine Terms of Services and acknowledge you've read our Privacy Policy, Notice at collection.</p> */}
            <center>
              <Link to="/login" className='link'><small>Already have an account <a href=''>Sign In</a></small></Link>
            </center>
        </form>
      </div>
    </div>
  )
}

export default SignUp
