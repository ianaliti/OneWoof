import React from 'react'
import { useDispatch } from 'react-redux'
import { addToCart } from '../cart/cartSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import cl from './Product.module.css'


const ProductComponent = ({ id, title, price, image, quantity }) => {

    const dispatch = useDispatch();

    const onAddCartItem = () => {
        dispatch(addToCart({ id, title, price, image }))
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
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent