/* eslint-disable react/prop-types */
import { useId } from "react"
import { CartIcon, ClearCartIcon } from "./Icons"
import "./Cart.css"
import { useCart } from "../hooks/useCart"

function CartItem({ thumbnail, title, price, quantity, addToCart, removeUnitFromCart }) {
    return (
        <li>
            <img src={thumbnail} alt={title} />
            <div>
                <strong>{title}</strong> - ${price}
            </div>
            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={removeUnitFromCart}>-</button>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
}

export function Cart() {
    const cartCheckboxId = useId()

    const { cart, clearCart, addToCart, removeUnitFromCart } = useCart()

    return (
        <>
            <label className="cart-button" htmlFor={cartCheckboxId}>
                <CartIcon />
            </label>
            <input
                type="checkbox"
                id={cartCheckboxId}
                hidden
            />

            <aside className="cart">
                <ul>
                    {
                        cart.map(product => (
                            <CartItem
                                key={product.id}
                                {...product}
                                addToCart={() => addToCart(product)}
                                removeUnitFromCart={() => removeUnitFromCart(product)}
                            />
                        ))
                    }
                </ul>

                <button onClick={clearCart}>
                    <ClearCartIcon />
                </button>
            </aside>
        </>
    )
}