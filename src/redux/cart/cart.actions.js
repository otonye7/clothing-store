import CartActionTypes from './cart.types';

export const toggleCartHidden = () => ({
    type: CartActionTypes.TOGGLE_CART_HIDDEN
});

export const addItem = section => ({
    type: CartActionTypes.ADD_ITEM,
    payload: section
})

export const removeItem = section => ({
    type: CartActionTypes.REMOVE_ITEM,
    payload: section
})

export const clearItemFromCart = section => ({
    type: CartActionTypes.CLEAR_ITEM_FROM_CART,
    payload: section
})