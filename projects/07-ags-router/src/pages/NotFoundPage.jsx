import { Link } from "../components/Link";

export function NotFoundPage() {
    return (
        <>
            <h1>404 Page Not Found</h1>
            <img src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZWswaGtpeWp2NWFwamlubmxsdGp2dXp0eGJndTFidDhpbXF1YXVsOCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/QMHoU66sBXqqLqYvGO/giphy.gif" alt="This is fine" />
            <p><Link to='/'>Back to home</Link>
            </p>
        </>
    )
}