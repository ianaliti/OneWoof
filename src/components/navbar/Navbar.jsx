import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { cartQuantity } from '../../features/cart/cartSlice';

const Navbar = () => {

    const quantity = useSelector(cartQuantity)

    return (
        <div className='content'>
            <nav>
                    <NavLink to="/">E-Dog</NavLink>
                    {/* <NavLink to="/tasks">Rides</NavLink> */}
                    <NavLink to="/accesoiries">Accesoiries</NavLink>
                    <NavLink to="/support">Support</NavLink>
                    {/* <NavLink to="/language">FR|EN</NavLink> */}
                    <NavLink to="/cart">My cart {quantity}</NavLink> 
            </nav>
        </div>
    )
}

export default Navbar