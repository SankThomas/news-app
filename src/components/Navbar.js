import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <header className="flex items-center justify-between">
      <div></div>
      <nav>
        <ul className="flex">
          <li>
            <NavLink to="/" className="text-black py-2 px-4">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/sports" className="text-black py-2 px-4">
              Sports
            </NavLink>
          </li>
        </ul>
      </nav>
      <div></div>
    </header>
  )
}

export default Navbar
