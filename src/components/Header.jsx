import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';

function Header() {
  const logo = <img src='https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png' alt='logo' />
  return (
    <div className='header'>
        {logo}
        <h3>Keep</h3>
        <div className='header_center'>
          <SearchIcon id='search-icon' /> 
          <input className='search' placeholder='Search' /> 
        </div>
        <div className='header_right'>
          {/* <Switch inputProps={{ 'aria-label': 'primary checkbox' }} /> */}
          <AccountCircleIcon className='account' />
        </div>
        
        
        
    </div>
  )
}

export default Header