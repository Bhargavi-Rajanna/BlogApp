import React from 'react'
import appLogo from '../../appLogo.jpg'
import './Header.scss';

const Header =()=>{
    return(
    <div className="header">
        <img className="logo" src={ appLogo } alt="app-logo"></img>
        <div>
             <h4>Blogs</h4>
        </div>
        
    </div>
    )
}
export default Header;