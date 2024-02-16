import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Product } from '../components/productCart/Product'
import ProductCart from '../components/productCart/ProductCart'

const Accesoiries = () => {

  return (
    <div>
      <Navbar />
        <p>Accesoiries</p>
        <Product />
        <ProductCart />
    </div>
  )
}

export default Accesoiries