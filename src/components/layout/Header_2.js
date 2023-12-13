/* eslint-disable camelcase */
/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import './Header_2.css'
import MenuIcon from '@mui/icons-material/Menu'

// eslint-disable-next-line camelcase
function Header_2 () {
  return (
    <div className="header_2">
      <div className="menu">
        <span>
          {' '}
          <MenuIcon />
        </span>
        <span>All</span>
      </div>
      <div className="nav_2">
        <span>Today's Deal</span>
        <span>Buy Again</span>
        <span>Customer Service</span>
        <span>Registry</span>
        <span>Gift Cards</span>
        <span>Sell</span>

      </div>

    </div>
  )
}

export default Header_2
