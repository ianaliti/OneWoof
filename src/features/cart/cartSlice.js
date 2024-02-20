import { createSlice } from "@reduxjs/toolkit";
import { selectedSearch } from "../search/searchSlice";

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

            if (existItem) {
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
            return state.filter((item) => item.title !== action.payload.title)
        }, 
        // addFavoriteRecipe: (state, action) => {
        //     const newItem = action.payload;
        //     state.itemsList.push(
        //         {
        //             id: newItem.id,
        //             price: newItem.price,
        //             quantity: 1,
        //             totalPrice: newItem.price,
        //             title: newItem.title,
        //             image: newItem.image
        //         });
        //     state.totalQuantity++
        // }
    }
})

export const { addToCart, removeFromCart } = cartSlice.actions;

export const selectCartItem = (state) => state.cart.itemsList;

// export const selectFilteredCartItem = (state) => {
//     const itemsCart = selectCartItem(state);
//     const searchTerm = selectedSearch(state);

//     // return itemsCart.filter((item) =>
//     //     item.title.toLowerCase().includes(searchTerm.toLowerCase())
//     // )
// }

export default cartSlice.reducer;