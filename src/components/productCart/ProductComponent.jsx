import React from 'react'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../store/cartSlice'
import MyMainButton from '../buttons/myMainButton/MyMainButton'
import { Link } from 'react-router-dom'


const ProductComponent = ({ id, title, price, image, category }) => {

    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartAction.addToCart({ id, title, price, image, category }))
    }

    return (
        <div className='productContainer'>
            <Link to={`/product/${id}`}>
            <div>
            <img className='card_image' src={image} alt='' />
                <div>
                    <p>{title}</p>
                    <p>{price}</p>
                    <p>{category}</p>  
                </div>
                <MyMainButton onClick={addToCart}>Add</MyMainButton>
            </div>
            </Link>
        </div>
    )
}

export default ProductComponent