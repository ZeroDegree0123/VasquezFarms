import "./ProfileNav.css"
import { Link } from 'react-router-dom';
import { render } from "@testing-library/react";

export default function profileNav() {
    return (
        <> 
            <section className="profile-nav-container">
                &nbsp;
                <Link className="profile-nav-links" to="/profile/overview">Overview</Link>
                &nbsp;
                <Link className="profile-nav-links" to="/profile/settings">Account Settings</Link>
                &nbsp;
                <Link className="profile-nav-links" to="/logout">Log Out</Link>
            </section>
        </>
    )
}
