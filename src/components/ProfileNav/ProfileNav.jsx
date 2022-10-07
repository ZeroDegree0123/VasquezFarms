import "./ProfileNav.css"
import { Link } from 'react-router-dom';

export default function profileNav({handleLogOut}) {
    return (
        <> 
            <section className="profile-nav-container">
                &nbsp;
                <Link className="profile-nav-links" to="/profile/overview">Overview</Link>
                &nbsp;
                <Link className="profile-nav-links" to="/profile/settings">Account Settings</Link>
                &nbsp;
                <Link className="profile-nav-links" to="/" onClick={handleLogOut}>Log Out</Link>
            </section>
        </>
    )
}
