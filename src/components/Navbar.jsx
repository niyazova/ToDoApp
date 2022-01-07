import React from 'react'
import './Navbar.css'
import image from '../assets/RE1Mu3b.png'
import {AiOutlineSearch} from 'react-icons/ai'
import {FiShoppingCart} from 'react-icons/fi'
import {IoPersonAddOutline} from 'react-icons/io5'

function Navbar() {
    return (
        <div className='navbar'>
            <ul className='nav__list'>
                <li className=' nav__link--logo'>
                    <img src={image}  alt="logo"/>
                </li>
                <li className='nav__link'>
                    Microsoft 365
                </li>
                <li className='nav__link'>
                    Office
                </li>
                <li className='nav__link'>
                    Windows
                </li>
                <li className='nav__link'>
                    Surface
                </li>
                <li className='nav__link'>
                    Xbox
                </li>
                <li className='nav__link'>
                    Deals
                </li>
                <li className='nav__link'>
                    Support
                </li>
                <li className='nav__link nav__link--active'>
                    All Microsoft
                </li>
                <li className='nav__link nav__link--icon'>
                    <AiOutlineSearch />
                </li>
                <li className='nav__link nav__link--icon'>
                    <FiShoppingCart />
                </li>
                <li className='nav__link nav__link--icon'>
                    <IoPersonAddOutline/>
                </li>
            </ul>
            
        </div>
    )
}

export default Navbar
