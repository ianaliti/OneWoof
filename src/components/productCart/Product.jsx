import React, { useEffect, useState } from "react"
import ProductCart from "./ProductCart"

export const Product = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setItems(json))
    }, [])

    console.log(items)

    return (
        <div>
            {items.map((item) => (
                <ProductCart key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} />
            ))}
        </div>
    )
}