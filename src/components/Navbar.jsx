import React from 'react'
import { Link } from 'react-router-dom'


export const Navbar = () => {
  return (
    <div>
        <nav className='blue darken-2'>
            <div className="navbar">
                <Link href="#" className="nav_logo">Logo</Link>
                <ul id="nav-mobile" className="left hide-on-med-and-down">
                    <li><Link to={"/"}>Home</Link></li>
                    <li><Link to={"/about"}>About</Link></li>
                    <li><Link to={"/contact"}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar