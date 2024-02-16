import React from 'react'
import { useDispatch } from 'react-redux'
import { cartAction } from '../../store/cartSlice'
import MyMainButton from '../buttons/myMainButton/MyMainButton'


const ProductCart = ({ id, title, price, image }) => {

    const dispatch = useDispatch()
    const addToCart = () => {
        dispatch(cartAction.addToCart({ id, title, price, image }))
    }
    return (
        <div className='productList'>
            <div className='productCart'>
            <img className='card_image' src={image} />
                <div>
                    <p>{title}</p>
                    <p>{price}</p>  
                </div>
            </div>
            <MyMainButton onClick={addToCart}>Add</MyMainButton>
        </div>
    )
}

export default ProductCart