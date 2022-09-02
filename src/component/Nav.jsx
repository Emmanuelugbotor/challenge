import React from 'react'
import CompanyLogo from './CompanyLogo'

export default function Nav() {
  return (
    <nav className="nav">
    <CompanyLogo />
    <ul >
        <li>Product</li>
        <li>Services</li>
        <li>About</li>
        <li>Log in</li>
    </ul>
    </nav>
  )
}
