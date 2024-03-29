import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../components/cart/cartSlice";
import productReducer from "../components/product/allProducts/allProductsSlice";
import searchReducer from "../components/search/searchSlice";


const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        search: searchReducer,
    },
})

export default store;