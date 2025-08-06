import React from 'react'
import { BrowserRouter } from 'react-router'

const Providers = ({ children }) => {
  return (
    <BrowserRouter>
       { children }
    </BrowserRouter>
  )
}

export default Providers