// import React from 'react'
// import { useSelector } from 'react-redux';
// import { selectCartItem, cartQuantity } from '../cart/cartSlice';
// import ProductComponent from '../product/ProductComponent';
// import cl from './Cart.module.css'
// import MyMainButton from '../buttons/myMainButton/MyMainButton';
// import Header from '../header/Header';


// const Cart = () => {

//   const items = useSelector(selectCartItem)
//   const quantity = useSelector(cartQuantity)

//   const products = () => {
//     if (!quantity) {
//       return (
//         <h2>Your cart is empty</h2>
//       )
//     } else {
//       return items.map((item) => (
//         <ProductComponent key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} quantity={item.quantity} />
//       )) 
//     }
//   }

//   console.log(items)

//   return (
//     <div>
//       <Header />
//       <div className={cl.cart_page}>
//         <div className={cl.bag}>
//           <h1>Your Cart</h1>
//           {products()}
//         </div>
//         <div>
//           <MyMainButton>CHECKOUT</MyMainButton>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cart;