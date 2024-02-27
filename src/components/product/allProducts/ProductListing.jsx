import React, { useEffect } from "react"
import ProductComponent from "../ProductComponent"
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsError, getProductsStatus, selectCartAllProducts } from "./allProductsSlice";
import cl from '../Product.module.css'

// import { addToCart } from '../../cart/cartSlice'
// import { selectCartItem } from '../../cart/cartSlice'
// import MyMainButton from "../../../components/buttons/myMainButton/MyMainButton";


export const ProductListing = () => {

    const dispatch = useDispatch();
    const products = useSelector(selectCartAllProducts);


    const productsStatus = useSelector(getProductsStatus);
    
    // const error = useSelector(getProductsError)

    useEffect(() => {
        if (productsStatus === 'idle') {
            dispatch(getProducts());
        }
    }, [productsStatus, dispatch])



    //     let productsToDisplay = '';
    //   if (productsStatus === 'loading') {
    //     productsToDisplay = <h2>Loading...</h2>;
    //   } else if (productsStatus === 'succeeded') {
    //     productsToDisplay = products.map((item) => (
    //         <ProductComponent key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} />
    //     ));
    //   } else if (productsStatus === 'failed') {
    //     productsToDisplay = <p>{error}</p>;
    //   }

    return (
        <div className={cl.productList}>
            {products.map((item) => (
                <ProductComponent key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} category={item.category}/>
            ))}
        </div>
    )
}