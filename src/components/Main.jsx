import React from 'react'
import './Main.css'
import boy from '../assets/boy.png'
import girl from '../assets/girl.png'
import logo from '../assets/logo.png'
import both from '../assets/both.png'
import {BsApple} from 'react-icons/bs'
import {AiFillAndroid} from 'react-icons/ai'
import {AiFillWindows} from 'react-icons/ai'


function Main() {
    return (
        <div className='main'>
            <div className="left__side">
                <img src={boy} alt="boy" />
            </div>
            <div className="middle__side">
                <div className="middle__side--img">
                    <img src={logo} alt="logo" style={{width:'100px'}} />
                </div>
                <p className="middle__side--title">
                    Microsoft To Do
                </p>
                <div className="middle__side--img2">
                    <img src={both} alt="both" />
                </div>
                <p className="middle__side--subtitle">
                    To Do gives you focus, from work to play.
                </p>
                <button className='middle__side--button'>Get started</button>
                <h4>Learn more</h4>
                <h3>Download</h3>
                <div className="middle__side--icons">
                    <div className="android">
                        <AiFillAndroid />
                    </div>
                    <div className="windows">
                        <AiFillWindows/>
                    </div>
                    <div className="apple">
                        <BsApple/>
                    </div>
                </div>
            </div>
            <div className="right__side">
                <img src={girl} alt="girl" />
            </div>
        </div>
    )
}

export default Main
