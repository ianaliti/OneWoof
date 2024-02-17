import React, { useEffect, useState } from "react"
import ProductComponent from "./ProductComponent"
import { useSelector } from "react-redux";

export const ProductListing = () => {

    const products = useSelector((state => state.cart.itemsList))
    // const { title, price } = products[0];

    console.log(products)

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setItems(json))
    }, [])

    return (
        <div className="productList">
            {items.map((item) => (
                <ProductComponent key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} />
            ))}
        </div>
    )
}

