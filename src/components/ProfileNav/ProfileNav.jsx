import "./ProfileNav.css"
import { Link } from 'react-router-dom';
import { render } from "@testing-library/react";

export default function profileNav() {
    function handleRender() {
        return render()
    }
    return (
        <> 
            <section className="profile-nav-container">
                &nbsp;
                <Link className="profile-nav-links" to="/profile/overview" onClick={handleRender}>Overview</Link>
                &nbsp;
                <Link className="profile-nav-links" to="/profile/settings" onClick={handleRender}>Account Settings</Link>
                &nbsp;
                <Link className="profile-nav-links" to="/logout">Log Out</Link>
            </section>
        </>
    )
}
