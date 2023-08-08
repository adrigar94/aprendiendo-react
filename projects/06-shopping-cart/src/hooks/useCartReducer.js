import { useReducer } from "react"
import { CART_ACTION_TYPES, initalStateCart, cartReducer } from "../reducers/cart"

export function useCartReducer() {
    const [state, dispatch] = useReducer(cartReducer, initalStateCart)

    const addToCart = (product) => dispatch({
        actionType: CART_ACTION_TYPES.ADD_TO_CART,
        actionPayload: product
    })

    const clearCart = () => dispatch({
        actionType: CART_ACTION_TYPES.CLEAR_CART,
        actionPayload: []
    })

    const removeFromCart = (product) => dispatch({
        actionType: CART_ACTION_TYPES.REMOVE_FROM_CART,
        actionPayload: product
    })

    const removeUnitFromCart = (product) => dispatch({
        actionType: CART_ACTION_TYPES.REMOVE_UNIT_FROM_CART,
        actionPayload: product
    })

    return { state, addToCart, clearCart, removeFromCart, removeUnitFromCart }
}