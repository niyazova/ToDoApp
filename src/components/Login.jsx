import React from 'react'
import '../components/Login.css'
import logo from '../assets/RE1Mu3b.png'
// import {useHistory} from 'react-router-dom'

function Login() {
    // let history =useHistory();


    return (
        <div className='login'>
            <div className="login__box">
                <div className="img">
                    <img src={logo} alt="logo" />
                </div>
                <h3>Sign in</h3>
                <div className="login__inputs">
                    <input type="text" placeholder='Email, phone or Skype' />
                    <input type="text" placeholder='name' />
                </div>
                <p>No account? <a href="#">Create one!</a></p>
                <a className='login__link' href="#">Can't access your account?</a>
                <div className="login__btns">
                    <button className='back'>Back</button>
                    <button className='next'>Next</button>
                </div>

            </div>
        </div>
    )
}

export default Login
