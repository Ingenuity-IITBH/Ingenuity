import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return(
        <nav>
            <div className='menuIcon'>
                <ul className='navbar-list'>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/events'>Events</NavLink>
                    </li>
                    <li>
                        <NavLink to='/team'>Team</NavLink>
                    </li>
                    <li>
                        <NavLink to='/halloffame'>hall Of Fame</NavLink>
                    </li>
                    <li>
                        <NavLink to='/contactus'>Contact Us</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar;