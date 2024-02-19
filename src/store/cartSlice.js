import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
    },
    reducers: {
        addToCart(state, action) {
            const newItem = action.payload;

            const existItem = state.itemsList.find((item) => item.id === newItem.id)

            if(existItem) {
                existItem.quantity++
                existItem.totalPrice += newItem.price
            } else {
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price, 
                    title: newItem.title,
                    image: newItem.image
                })
                state.totalQuantity++
            }
        },
        removeFromCart(state, action) {
            return state.filter((item) => item.id !== action.payload.id)
        } 
    }
})

export const { cartAction, removeFromCart} = cartSlice.actions;

export const selectItem = (state) => state.cart;

export default cartSlice.reducer;