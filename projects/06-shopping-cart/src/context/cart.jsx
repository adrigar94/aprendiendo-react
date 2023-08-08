/* eslint-disable react/prop-types */
import { createContext } from "react";
import { useCartReducer } from '../hooks/useCartReducer';

export const CartContext = createContext()

export function CartProvider({ children }) {
    const {
        state,
        addToCart,
        clearCart,
        removeFromCart,
        removeUnitFromCart
    } = useCartReducer()

    const checkProductInCart = product => {
        return state.some(item => item.id === product.id)
    }

    return (
        <CartContext.Provider value={{
            cart: state,
            addToCart,
            clearCart,
            checkProductInCart,
            removeFromCart,
            removeUnitFromCart
        }}>
            {children}
        </CartContext.Provider>
    )
}
