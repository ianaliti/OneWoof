import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../features/cart/cartSlice";
import productReducer from "../features/allProducts/allProducts/allProductsSlice";
import searchReducer from "../features/search/searchSlice";


const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        search: searchReducer,
    },
})

export default store;