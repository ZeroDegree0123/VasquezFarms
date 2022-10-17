import './NavBar.css'
import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar( {user, setUser, cart} ) {

    function handleClick(evt) {
        const isDropDown = evt.target.matches("[data-dropdown-button]")
        console.log(isDropDown)
        if (!isDropDown && evt.target.closest("[data-dropdown]") != null) return;
        let currentDropDown;
        if (isDropDown) {
            currentDropDown = evt.target.closest("[data-dropdown]")
            currentDropDown.classList.toggle('active')
        }
        document.querySelectorAll("[data-dropdown].active").forEach(drop => {
            if (drop === currentDropDown) return;
            drop.classList.remove('active');
        })
    }

    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }

    
    return(
        <nav>
            <div className="left-side-nav">
                <Link className="link" id="app-logo-container" to="/"><img className="" id="app-logo" src="https://imgur.com/SKZLmSw.png" alt="" /></Link>
                <Link className="link" to="/soaps">Soaps</Link>
                {/* <Link className="link" to="/admin">Admin</Link> */}
                <Link className="link" to="/about">About Us</Link>
            </div>
                { user ?
                <>
                    <div className="dropdown" data-dropdown>
                        <button onClick={handleClick} id="tester" className="dropdown-link" data-dropdown-button>
                            <img className="profile-image" src="https://imgur.com/J5uAb6c.png" alt="" />
                        </button>
                        <div className="dropdown-menu">
                            <Link className="dropdown-content" to="/orders/new">
                                Cart
                                &nbsp;
                                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" id="cart" className="bi bi-cart" viewBox="0 0 17 17">
                                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                                </svg>
                                {/* <span className="cart-item-counter"></span> */}
                            </Link>
                            <Link className="dropdown-content" to="/profile/overview">Account</Link>
                            <Link className="dropdown-content" to="/" onClick={handleLogOut}>Log Out</Link>
                        </div>
                    </div>
                </>:
                    <Link className="link" to="/login">Login</Link>
                }
                
        </nav>
    ) 
}


