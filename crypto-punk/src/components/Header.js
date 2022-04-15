import React from 'react'
import './Header.css';
import themeSwitch from '../assets/header/theme-switch.png'
import searchicon from '../assets/header/search.png';
import CryptoPunkLogo from '../assets/header/cryptopunk-logo.png';
function Header() {
  return (
    <div className='header'>
        <div className='logoContainer'>
            <img className='punklogo' src={CryptoPunkLogo} alt='Netflix Logo' />
        </div>
        <div className='searchbar'>
            <div className='searchbar-icon-container'>
                <img src={searchicon} className='searchbar-icon' alt='search icon' />
            </div>
                <input className='search' type='text' placeholder='Search' />
        </div>
        <div className='headeritems'>
            <p>Drops</p>
            <p>Marketplace</p>
            <p>Create</p>
        </div>
        <div className='headeractions'>
            <div className='theme-switch'>
                <img src={themeSwitch} alt='theme switch' />
            </div>
        </div>
        <div className='login'>
            GET IN
        </div>
    </div>
  )
}

export default Header