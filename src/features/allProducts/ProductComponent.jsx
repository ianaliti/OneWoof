import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart } from '../cart/cartSlice'
import { selectCartItem } from '../cart/cartSlice'
import MyMainButton from '../../components/buttons/myMainButton/MyMainButton'
import { Link } from 'react-router-dom'


const ProductComponent = ({ id, title, price, image, category }) => {

    const dispatch = useDispatch();
    const products = useSelector(selectCartItem);

    // // const cart = useSelector(state => state.product)
    // // // console.log(cart)
    // // const addToCart = () => {
    // //     dispatch(cartAction.addToCart({ id, title, price, image, category }))
    // // }
    const onAddCartItem = () => {
        dispatch(addToCart({ id, title, price, image, category }))
    }

    return (
        <div className='productContainer'>
            {/* <Link to={`/product/${id}`}> */}
            <div>
            <img className='card_image' src={image} alt='' />
                <div>
                    <p>{title}</p>
                    <p>{price}</p>
                    <p>{category}</p>  
                    <MyMainButton onClick={onAddCartItem}>Add</MyMainButton>
                </div>
            </div>
            {/* </Link> */}
        </div>
    )
}

export default ProductComponent