import React from 'react'
import Header from '../components/header/Header'
import { ProductListing } from '../components/product/allProducts/ProductListing'
import Search from '../components/search/Search'

const Accesoiries = () => {

  return (
    <div>
      <Header />
        <Search />
        <ProductListing />
    </div>
  )
}

export default Accesoiries