import { ActionTypes } from "../contants/action-types";

const initualState = {
    products:[
        {
            id: 1,
            title: 'Dog',
            category: 'programer',
        },
    ],
};

export const productReducer = (state, action) => {
    switch (action.type) {
        case ActionTypes.SET_PRODUCTS:
            return state;
        default:
            return state;
    }
};