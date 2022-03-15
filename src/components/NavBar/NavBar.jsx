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
            &nbsp; | &nbsp; 
            &nbsp; | &nbsp; 
                { user ?
                <>
                    <Link className="link" to="/orders/new">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </Link> 
                    <Link className="link" to="/" onClick={handleLogOut}>Log Out</Link>
                </>:
                    <Link className="link" to="/login">Login</Link>
                }
                &nbsp; | &nbsp; 
        </nav>
    ) 
}