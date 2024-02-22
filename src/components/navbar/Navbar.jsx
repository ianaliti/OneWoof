import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { cartQuantity } from '../../features/cart/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './navbar.module.css'

const Navbar = () => {

    const quantity = useSelector(cartQuantity)

    return (
        <nav>
            <NavLink to="/">E-Dog</NavLink>
            {/* <NavLink to="/tasks">Rides</NavLink> */}
            <NavLink to="/accesoiries">Accesoiries</NavLink>
            <NavLink to="/support">Support</NavLink>
            {/* <NavLink to="/language">FR|EN</NavLink> */}
            <NavLink to="/cart">
                <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="lg" style={{ color: "#2a3447", }} />
                {quantity}
            </NavLink>
        </nav>
    )
}

export default Navbar