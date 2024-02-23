import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, selectCartItem, cartQuantity } from '../cart/cartSlice';
import ProductComponent from '../product/ProductComponent';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Navbar from '../navbar/Navbar';

const Cart = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarOpen = () => {
    setSidebarOpen(true);
  };

  const handleSidebarClose = () => {
    setSidebarOpen(false);
  };

  const dispatch = useDispatch()
  const items = useSelector(selectCartItem)
  const quantity = useSelector(cartQuantity)

  const onRemoveItemCart = (items) => {
    dispatch(removeFromCart(items))
  }


  return (
    <div>
      <Navbar />
      <div className="sidebar">
        {!sidebarOpen ? (
          <div className="sidebar_icon" onMouseEnter={handleSidebarOpen}>
            <FontAwesomeIcon icon="fa-solid fa-cart-shopping" size="lg" style={{ color: "#2a3447", }} className='cardIcon' />
          </div>
        ) : (
          <>
            <div className="sidebar_icon" onMouseLeave={handleSidebarClose}>
              {
                items.map((item) => (
                  <div>
                    <ProductComponent key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} />
                    {/* <MyMainButton onClick={onRemoveItemCart}>Remove</MyMainButton> */}
                  </div>
                ))
              }
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Cart;