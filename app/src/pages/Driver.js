import { Link, useParams } from "react-router-dom";
import drivers from "../components/data";

const Driver = () => {
    const { driverid } = useParams();
    const driver = drivers.find((driver) => driver.id === driverid)
    const {image, name} = driver; 
    
    return (
        <section>
            <img src={image} alt='' />
            <h3>{ name }</h3>
            <Link to='/Drivers'>Back to Drivers Page</Link>
        </section>
    )
}

export default Driver;