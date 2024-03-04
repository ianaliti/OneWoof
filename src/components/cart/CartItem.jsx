import React from 'react'
import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { addToCart, removeFromCart } from '../cart/cartSlice'
import cl from './Cart.module.css'

const CartItem = ({ id, title, price, image, quantity }) => {

    const dispatch = useDispatch();

    const onAddCartItem = () => {
        dispatch(addToCart({ id, title, price, image, quantity }))
    }

    const onRemoveItemCart = () => {
        dispatch(removeFromCart(id))
    }
    return (
        <div className={cl.cart_item}>
            <div className={cl.card_image}>
                <img src={image} alt='' />
            </div>
            <div className={cl.info}>
                <h3>{title}</h3>
                <p>${price}</p>
                <div className={cl.productButton}>
                <div className={cl.count}>
                    <button onClick={onAddCartItem}>
                        <FontAwesomeIcon icon="fa-solid fa-plus" size="lg" style={{ color: "#151619", }} />
                    </button>
                    <div>
                        <button className='num_button'>{quantity}</button>
                    </div>
                    <button onClick={onRemoveItemCart}>
                        <FontAwesomeIcon icon="fa-solid fa-minus" size="lg" style={{ color: "#151619", }} />
                    </button>
                </div>
            </div>
            </div>
        </div>
    )
}

export default CartItem