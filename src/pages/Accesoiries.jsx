import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { ProductListing } from '../components/productCart/ProductListing'
import Cart from '../components/cart/Cart'

const Accesoiries = () => {

  return (
    <div>
      <Navbar />
        <ProductListing />
        <Cart />
    </div>
  )
}

export default Accesoiries