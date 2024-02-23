import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { cartQuantity, selectCartItem } from '../cart/cartSlice';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classes from './navbar.module.css'
import './navbar.module.css'
import MyMainButton from '../buttons/myMainButton/MyMainButton';
import ProductComponent from '../product/ProductComponent';
import { useAuth } from '../auth/useAuth';


const Navbar = () => {

    const { signout } = useAuth();
    const navigate = useNavigate();

    const [isNavOpen, setIsNavOpen] = useState(false);

    const items = useSelector(selectCartItem)
    const quantity = useSelector(cartQuantity)


    return (
        <div>
            <nav>
                <NavLink to="/">E-Dog</NavLink>
                <NavLink to="/accesoiries">Accesoiries</NavLink>
                <NavLink to="/support">Support</NavLink>

                <button
                    className='sidebar_toggle'
                    onClick={() => setIsNavOpen(!isNavOpen)}
                >
                    <span>
                        <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="lg" style={{ color: "#2a3447", }} />
                        {quantity}
                    </span>
                </button>
                <Link to='/login'>
                    <button
                        onClick={() => signout(() => navigate('/', { replace: true }))} >
                        <span>
                            <FontAwesomeIcon icon="fa-solid fa-user" size="lg" style={{ color: "#2a3447", }} />
                        </span>
                    </button>
                </Link>
            </nav>
            <div className={`${classes.nav} ${isNavOpen ? `${classes.nav_open}` : `${classes.nav_closed}`}`}>
                <div className={classes.logo}>My Bag</div>
                <div className={classes.product_cart}>
                    {
                        items.map((item) => (
                            <ProductComponent key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} className={classes.cartItems} />
                        ))
                    }
                </div>
                <div className={classes.bagButton}>
                    <Link to='/cart'>
                        <MyMainButton type='button'>View Bag</MyMainButton>
                    </Link>
                </div>
            </div>
        </div >
    )
}

export default Navbar