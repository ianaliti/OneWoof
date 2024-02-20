import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, selectCartItem } from './cartSlice';
import ProductComponent from '../allProducts/ProductComponent';
import MyMainButton from '../../components/buttons/myMainButton/MyMainButton';

const Cart = () => {

  const dispatch = useDispatch()
  const items = useSelector(selectCartItem)
  const { status } = useSelector(state => state.products)

  console.log(items)

  const onRemoveItemCart = (items) => {
    dispatch(removeFromCart(items))
  }

  return (
    <div>
      <h1>Product List</h1>
      <div>
        {/* {
          items.map((product) => (
            <div>
              <ProductComponent product={product} key={product.id} />
              <MyMainButton onClick={onRemoveItemCart} >Add</MyMainButton>
            </div>
          ))
        } */}
      </div>
    </div>
  )
}

export default Cart;