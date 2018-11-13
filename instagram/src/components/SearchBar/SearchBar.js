import React, { Component } from 'react';
import './SearchBar.css';
import logo from '../../images/Instagram-logo.png';
import logoWord from '../../images/instagram_Word.png';
import profileImg from '../../images/profile.png';


const SearchBar = props => {

    return(
        <div className='searchBar'>
            <div className='head-box logo'>
            <img src={logo} className='logo'/>
            <h1> | </h1>
            <img src={logoWord}/>
            
            </div>
            <div className='head-box search'>
            <input placeholder="Search"/>
            </div>
            <div className='head-box menu'>
            <h1>⦾</h1>
            <h1>♡</h1>
            <img src={profileImg} className='profile'/>
            
            </div>
            
        </div>
    );
}

export default SearchBar;