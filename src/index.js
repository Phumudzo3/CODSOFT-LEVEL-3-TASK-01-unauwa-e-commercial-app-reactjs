import React from 'react'
import './index.css'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { ShoppingState } from './components/context/shopping/ShoppingState'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>

    <BrowserRouter>

      <ShoppingState>
        <App />
      </ShoppingState>

    </BrowserRouter>

  </React.StrictMode>
)
