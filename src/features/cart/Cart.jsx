import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, selectCartItem, cartQuantity } from './cartSlice';
import ProductComponent from '../allProducts/ProductComponent';
import MyMainButton from '../../components/buttons/myMainButton/MyMainButton';

const Cart = () => {

  // const [cardOpen, setCardOpen] = useState(false)
  // const closeCard = () => {
  //   setCardOpen(null)
  // }


  const dispatch = useDispatch()
  const items = useSelector(selectCartItem)

  const quantity = useSelector(cartQuantity)

  const onRemoveItemCart = (items) => {
    dispatch(removeFromCart(items))
  }

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {
          items.map((item) => (
            <div>
              <ProductComponent key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} />
              {/* <MyMainButton onClick={onRemoveItemCart}>Remove</MyMainButton> */}
            </div>
          ))
        }
      </div>
        <div>
          {quantity}
        </div>
    </div>
  )
}

export default Cart;