import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { ProductListing } from '../features/allProducts/allProducts/ProductListing'
import Cart from '../features/cart/Cart'
import Search from '../features/search/Search'

const Accesoiries = () => {

  return (
    <div>
      <Navbar />
        <Search />
        <ProductListing />
        <Cart />
    </div>
  )
}

export default Accesoiries