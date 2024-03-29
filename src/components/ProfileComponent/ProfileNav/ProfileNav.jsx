import "./ProfileNav.css"
import { Link } from 'react-router-dom';

export default function profileNav({ handleLogOut }) {
    return (
        <>
            <section className="profile-nav-container">
                <Link className="profile-nav-links" to="/">&#60; Home</Link>
                <Link className="profile-nav-links" to="/profile/overview">Overview</Link>
                <Link className="profile-nav-links" to="/profile/settings">Account Settings</Link>
                <Link className="profile-nav-links" to="/" onClick={handleLogOut}>Log Out</Link>
            </section>
        </>
    )
}
