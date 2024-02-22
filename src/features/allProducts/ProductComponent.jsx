import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../cart/cartSlice'
import { selectCartItem } from '../cart/cartSlice'
import MyMainButton from '../../components/buttons/myMainButton/MyMainButton'
import { Link } from 'react-router-dom'


const ProductComponent = ({ id, title, price, image, category }) => {

    const dispatch = useDispatch();

    const onAddCartItem = () => {
        dispatch(addToCart({ id, title, price, image, category }))
    }

    return (
        <div className="productContainer">
            <div className='componentCart'>
                {/* <Link to={`/product/${id}`}> */}
                <div className='card_image'>
                    <img src={image} alt='' />
                </div>
                {/* </Link> */}
                <div className='product_info'>
                    <h3>{title}</h3>
                    <p>${price}</p>
                </div>
                <div className='productButton'>
                    <MyMainButton onClick={onAddCartItem}>Add</MyMainButton>
                </div>
            </div>
        </div>
    )
}

export default ProductComponent