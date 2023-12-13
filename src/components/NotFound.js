import React from 'react'
import './NotFound.css'
import { Link } from 'react-router-dom'

function NotFound () {
  return (
    <div className="not_found">

      <Link to="/">
        <div>
          <h1>Page Not Found!</h1>
        </div>
        <div>
          <img src="" />
        </div>
      </Link>
    </div>
  )
}

export default NotFound
