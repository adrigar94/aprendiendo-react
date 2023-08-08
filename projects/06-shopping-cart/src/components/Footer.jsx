import './Footer.css'
// import { useFilters } from '../hooks/useFilters'
// import { useCart } from '../hooks/useCart'
import { GithubIcon } from "./Icons"

export function Footer() {

    // const { filters } = useFilters()
    // const { cart } = useCart()

    return (
        <footer className="footer">
            {/* <span>Filters: </span>
            {
                JSON.stringify(filters, null, 2)
            }
            <br />
            <span>Cart: </span>
            {
                JSON.stringify(cart, null, 2)
            } */}

            <h4>
                Prueba técnica de React
                <a href='https://github.com/adrigar94'>
                    <GithubIcon size={12} /> @AdriGar94
                </a>
            </h4>
            <h5>Shopping Cart with useContext & useReducer</h5>
            
        </footer>
    )
}