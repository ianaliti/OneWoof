import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartSlice";
import productReducer from "../components/allProducts/productsSlice";


const store = configureStore({
    reducer: {
        products: productReducer,
        cart: cartReducer,
    },
})

export default store;