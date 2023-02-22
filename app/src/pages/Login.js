import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = ({setUser}) => {
    const [fName, setFName] = useState('');
    const [lName, setLName] = useState('');
    const [email, setEmail] = useState('');

    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        if(!fName || !email || !lName) return;
        setUser({fName:fName, lName:lName, email:email})
        navigate('/Dashboard')
    }
    return (
        <section>
            
            <form onSubmit={handleSubmit}>
                <h3>Login in</h3>
                <label htmlFor='fName'>First Name</label>
                <input 
                    id='fName' 
                    value={fName}
                    type='text' 
                    onChange={(e) => setFName(e.target.value)}
                />
                <label htmlFor="lName">Last Name</label>
                <input
                id='lName'
                value={lName}
                type='text'
                onChange={(e) => setLName(e.target.value)}
                />
                <label htmlFor='email'>email</label>
                <input 
                    id='email'
                    value={email}
                    name='email' 
                    type='email'
                    onChange={(e) => setEmail(e.target.value)}/>
                <input type='submit' />
            </form>
        </section>
    )
}

export default Login;