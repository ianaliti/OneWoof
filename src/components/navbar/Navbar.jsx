import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='content'>
            <nav>
                    <NavLink to="/">E-Dog</NavLink>
                    {/* <NavLink to="/tasks">Rides</NavLink> */}
                    <NavLink to="/accesoiries">Accesoiries</NavLink>
                    <NavLink to="/support">Support</NavLink>
                    {/* <NavLink to="/language">FR|EN</NavLink>
                    <NavLink to="/tasks">My VanWoof</NavLink> */}
            </nav>
        </div>
    )
}

export default Navbar