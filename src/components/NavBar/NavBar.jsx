import { Link } from 'react-router-dom';
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
        <nav>
            <Link to="/home">Home</Link>
            &nbsp; | &nbsp; 
            <Link to="/about">About Us</Link>
            &nbsp; | &nbsp; 
            <Link to="/orders/new">Cart</Link>
            &nbsp; | &nbsp; 
            <Link to="/admin">Admin</Link>
            &nbsp; | &nbsp; 
            <Link to="/orders">OrderHistory</Link>
            &nbsp; | &nbsp; 
            <Link to="/soaps">Soaps</Link>
            &nbsp; | &nbsp; 
                { user ?
                    <Link to="/" onClick={handleLogOut}>Log Out</Link>
                    :
                    <Link to="/login">Login</Link>
                }
        </nav>
    ) 
}