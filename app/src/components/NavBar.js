import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <nav>
            <NavLink 
            to='/'
            style={({isActive}) => {
                return {color: isActive ? 'red' : 'grey'}
            }}>
                Home
            </NavLink>
            <NavLink 
            to='/Appointment'
            style={({isActive}) => {
                return {color: isActive ? 'red' : 'grey'}
            }}>
                Appointment
            </NavLink>
            <NavLink 
            to='/Contact'
            style={({isActive}) => {
                return {color: isActive ? 'red' : 'grey'}
            }}>
                Contact
            </NavLink>   
            <NavLink 
            to='/Drivers'
            style={({isActive}) => {
                return {color: isActive ? 'red' : 'grey'}
            }}>
                Drivers
            </NavLink>
            <NavLink 
            to='/Login'
            style={({isActive}) => {
                return {color: isActive ? 'red' : 'grey'}
            }}>
                Login
            </NavLink>       
        </nav>
    )
}

export default NavBar;