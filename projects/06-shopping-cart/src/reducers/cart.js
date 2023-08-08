export const initalStateCart = JSON.parse(window.localStorage.getItem('cart')) || []

export const CART_ACTION_TYPES = {
    ADD_TO_CART: 'ADD_TO_CART',
    CLEAR_CART: 'CLEAR_CART',
    REMOVE_FROM_CART: 'REMOVE_FROM_CART',
    REMOVE_UNIT_FROM_CART: 'REMOVE_UNIT_FROM_CART'
}

const updateCartLocalStorage = state => {
    window.localStorage.setItem('cart', JSON.stringify(state))
}
const clearCartLocalStorage = () => {
    window.localStorage.removeItem('cart')
}

export const cartReducer = (state, action) => {
    const { actionType, actionPayload } = action
    switch (actionType) {
        case CART_ACTION_TYPES.ADD_TO_CART: {
            const productInCartIndex = state.findIndex(item => item.id === actionPayload.id)
            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity += 1
                updateCartLocalStorage(newState)
                return newState
            }

            const newState = [
                ...state,
                {
                    ...actionPayload,
                    quantity: 1
                }
            ]
            updateCartLocalStorage(newState)
            return newState
        }
        case CART_ACTION_TYPES.CLEAR_CART: {
            clearCartLocalStorage()
            return initalStateCart
        }
        case CART_ACTION_TYPES.REMOVE_FROM_CART: {
            const newState = state.filter(item => item.id !== actionPayload.id)
            updateCartLocalStorage(newState)
            return newState
        }
        case CART_ACTION_TYPES.REMOVE_UNIT_FROM_CART: {
            if (actionPayload.quantity <= 1) {
                const newState = state.filter(item => item.id !== actionPayload.id)
                updateCartLocalStorage(newState)
                return newState
            }

            const productInCartIndex = state.findIndex(item => item.id === actionPayload.id)
            if (productInCartIndex >= 0) {
                const newState = structuredClone(state)
                newState[productInCartIndex].quantity -= 1
                updateCartLocalStorage(newState)
                return newState
            }
            return state
        }
        default:
            return state
    }
}