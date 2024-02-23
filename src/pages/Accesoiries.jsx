import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { ProductListing } from '../features/allProducts/allProducts/ProductListing'
import Search from '../features/search/Search'

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