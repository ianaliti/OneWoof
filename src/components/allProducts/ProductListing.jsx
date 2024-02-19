import React, { useEffect } from "react"
import ProductComponent from "../productCart/ProductComponent"
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsStatus } from "./productsSlice";


export const ProductListing = () => {

    const dispatch = useDispatch()

    const allProductsStatus = useSelector(getProductsStatus)

    useEffect(() => {
        if (allProductsStatus === 'idle') {
            dispatch(getProducts());
        }
    }, [allProductsStatus, dispatch])

    console.log(allProductsStatus)

    return (
        <div className="productList">
            <ProductComponent />
        </div>
    )
}