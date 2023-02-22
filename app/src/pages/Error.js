import { Link } from "react-router-dom";


const Error = () => {
    return (
        <section>
            <h1>404</h1>
            <p>Page Not Found</p>
            <Link to='/'>Back Home</Link>
        </section>
    )
}

export default Error;