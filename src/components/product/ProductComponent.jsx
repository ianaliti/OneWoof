import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, removeFromCart } from '../cart/cartSlice'
import MyMainButton from '../buttons/myMainButton/MyMainButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { cartQuantity } from '../cart/cartSlice';
import cl from './Product.module.css'


const ProductComponent = ({ id, title, price, image }) => {

    const dispatch = useDispatch();
    const quantity = useSelector(cartQuantity)

    const onAddCartItem = () => {
        dispatch(addToCart({ id, title, price }))
    }

    const onRemoveItemCart = () => {
        dispatch(removeFromCart(id))
      }
      

    return (
        <div className={cl.productContainer}>
            <div className={cl.componentCart} key={id}>
                {/* <Link to={`/product/${id}`}> */}
                <div className={cl.card_image}>
                    <img src={image} alt='' />
                </div>
                {/* </Link> */}
                <div className={cl.product_info}>
                    <h3>{title}</h3>
                    <p>${price}</p>
                </div>
                <div className={cl.productButton}>
                    <div className={cl.count}>
                        <button onClick={onAddCartItem}>
                            <FontAwesomeIcon icon="fa-solid fa-plus" size="lg" style={{ color: "#151619", }} />
                        </button>
                        <div>
                            <input
                                name='quantity'
                                value={quantity}
                            />
                        </div>
                        <button onClick={onRemoveItemCart}>
                            <FontAwesomeIcon icon="fa-solid fa-minus" size="lg" style={{ color: "#151619", }} />
                        </button>
                    </div>
                    {/* <MyMainButton onClick={onAddCartItem}>Add</MyMainButton> */}
                </div>
            </div>
        </div>
    )
}

export default ProductComponent