import React, { useEffect } from "react"
import ProductComponent from "../ProductComponent"
import { useDispatch, useSelector } from "react-redux";
import { getProducts, getProductsError, getProductsStatus, selectAllProducts } from "./allProductsSlice";
import { addToCart } from '../../cart/cartSlice'
import { selectCartItem } from '../../cart/cartSlice'
import MyMainButton from "../../../components/buttons/myMainButton/MyMainButton";


export const ProductListing = () => {

    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const { id, title, price, image, category } = products;
    const productsStatus = useSelector(getProductsStatus);
    // const productsCart = useSelector(selectCartItem);
    
    const error = useSelector(getProductsError)

    useEffect(() => {
        if (productsStatus === 'idle') {
            dispatch(getProducts());
        }
    }, [productsStatus, dispatch])

    const onAddCartItem = () => {
        dispatch(addToCart({ id, title, price, image, category }))
    }

    // console.log(productsCart)

    // // const cart = useSelector(state => state.product)
    // // // console.log(cart)
    // // const addToCart = () => {
    // //     dispatch(cartAction.addToCart({ id, title, price, image, category }))
    // // }
    // const onAddCartItem = () => {
    //     dispatch(addToCart({ id, title, price, image, category }))
    // }


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
        <div className="productList">
            {products.map((item) => (
                <div>
                    <ProductComponent key={item.id} id={item.id} image={item.image} title={item.title} price={item.price} />
                    {/* <MyMainButton onClick={onAddCartItem} >Add</MyMainButton> */}
                </div>
            ))}
        </div>
    )
}