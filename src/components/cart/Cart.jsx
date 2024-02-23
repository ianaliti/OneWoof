import React from 'react'
import { useSelector } from 'react-redux';
import { selectCartItem, cartQuantity } from '../cart/cartSlice';
import ProductComponent from '../product/ProductComponent';
import Navbar from '../navbar/Navbar';


const Cart = () => {

  const items = useSelector(selectCartItem)
  const quantity = useSelector(cartQuantity)


  return (
    <div>
      <Navbar/>
      <div>
        <h1>Checkout</h1>
        <h1>Please</h1>
        <h1>Ocean</h1>
      {
        items.map((item) => (
            <ProductComponent key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} />
        ))
      }
      </div>
    </div>
  )
}

export default Cart;