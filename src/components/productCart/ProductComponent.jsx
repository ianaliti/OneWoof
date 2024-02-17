import React from 'react'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../store/cartSlice'
import MyMainButton from '../buttons/myMainButton/MyMainButton'


const ProductComponent = ({ id, title, price, image }) => {

    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartAction.addToCart({ id, title, price, image }))
    }

    return (
        <div className='productContainer'>
            <div>
            <img className='card_image' src={image} alt='' />
                <div>
                    <p>{title}</p>
                    <p>{price}</p>  
                </div>
                <MyMainButton onClick={addToCart}>Add</MyMainButton>
            </div>
        </div>
    )
}

export default ProductComponent