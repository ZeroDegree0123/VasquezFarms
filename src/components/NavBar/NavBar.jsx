import { Link } from 'react-router-dom';
import './NavBar.css'
// import { getUser } from '../../utilities/users-service';
// Using the import below, we can call any exported function using: userService.someMethod()
import * as userService from '../../utilities/users-service';

export default function NavBar( {user, setUser} ) {
    function handleLogOut() {
         // Delegate to the users-service
        userService.logOut();
        // Update state will also cause a re-render
        setUser(null);
    }
    return(
        <nav className="navbar  navbar-dark bg-dark">
            &nbsp; | &nbsp; 
            <Link className="link" to="/home">Home</Link>
            &nbsp; | &nbsp; 
            <Link className="link" to="/soaps">Soaps</Link>
            &nbsp; | &nbsp;
            <Link className="link" to="/admin">Admin</Link>
            &nbsp; | &nbsp; 
            <Link className="link" to="/about">About Us</Link>
            &nbsp; | &nbsp; 
                { user ?
                <>
                    <Link className="link" to="/orders">OrderHistory</Link>
                    &nbsp; | &nbsp; 
                    <Link className="link" to="/orders/new">Cart</Link> 
                    &nbsp; | &nbsp; 
                    <Link className="link" to="/" onClick={handleLogOut}>Log Out</Link>
                </>:
                    <Link className="link" to="/login">Login</Link>
                }
                &nbsp; | &nbsp; 
        </nav>
    ) 
}