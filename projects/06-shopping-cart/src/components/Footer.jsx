import './Footer.css'
import { useFilters } from '../hooks/useFilters'
// { GithubIcon } from "./Icons";

export function Footer() {

  const {filters} = useFilters()
    return (
        <footer className="footer">
            {
                JSON.stringify(filters, null, 2)
            }

            {
                /* <h4>Prueba técnica de React</h4>
                <a href='https://github.com/adrigar94'>
                    <GithubIcon height={16}/> @AdriGar94
                </a>
                <h5>Shopping Cart with useContext & useReducer</h5> */
            }
        </footer>
    )
}