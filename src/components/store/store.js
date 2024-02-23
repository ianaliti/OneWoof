import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "../cart/cartSlice";
import productReducer from "../product/allProducts/allProductsSlice";
import searchReducer from "../search/searchSlice";


const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
        search: searchReducer,
    },
})

export default store;