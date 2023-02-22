import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Contact = ({setUser, user}) => {
    const [phoneNumber, setPhoneNumber] = useState('');

    const navigate = useNavigate();

    const handleSumbit =(e)=>{
        e.preventDefault();
        setUser(
            {...user, phone:phoneNumber}
        )
        navigate('/Dashboard')
    }
    return (
        <section>
            <h1>Update your Contact Info</h1>
            <form onSubmit={handleSumbit}>
                <label htmlFor="phoneNumber">Phone Number</label>
                <input 
                id="phoneNumber"
                value={phoneNumber}
                type='phone number'
                onChange={(e) => setPhoneNumber(e.target.value)}
                />
                <input type='submit' />
            </form>
        </section>
    )
}

export default Contact;