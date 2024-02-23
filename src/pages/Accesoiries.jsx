import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { ProductListing } from '../components/product/allProducts/ProductListing'
import Search from '../components/search/Search'

const Accesoiries = () => {

  return (
    <div>
      <Navbar />
        <Search />
        <ProductListing />
    </div>
  )
}

export default Accesoiries