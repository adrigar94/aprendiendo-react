import { Link } from "../components/Link";

export default function HomePage() {
    return (
        <>
            <h1>AGS Router</h1>
            <p>Example page for create a React Router from zero</p>
            <Link to="/about">About</Link>
        </>
    )
}