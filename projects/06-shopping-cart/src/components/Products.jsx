/* eslint-disable react/prop-types */
import "./Products.css"
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons"
import { useCart } from "../hooks/useCart"

export function Products({ products }) {
    const { addToCart, removeFromCart, checkProductInCart } = useCart()

    return (
        <main className="products">
            <ul>
                {products.slice(0, 15).map(product => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        <li key={product.id}>
                            <img src={product.thumbnail} alt={product.title} />
                            <div>
                                <strong>{product.title}</strong> - ${product.price}
                            </div>
                            <div>
                                <button
                                    className={isProductInCart
                                        ? "inCart"
                                        : ""
                                    }
                                    onClick={() => isProductInCart
                                        ? removeFromCart(product)
                                        : addToCart(product)
                                    }
                                >
                                    {
                                        isProductInCart
                                            ? <RemoveFromCartIcon />
                                            : <AddToCartIcon />
                                    }
                                </button>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </main>
    )
}