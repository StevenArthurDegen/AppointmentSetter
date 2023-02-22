import { Link } from "react-router-dom";
import drivers from "../components/data";
const Drivers = ( ) => {
    return (
        <section>
            <h2>Driver list</h2>
            <div>
                {drivers.map ((driver) => {
                    return(
                        <article key={driver.id}>
                            <h5>{driver.name}</h5>
                            <Link to={`/Drivers/${driver.id}`}>
                                More Info
                            </Link>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

export default Drivers;