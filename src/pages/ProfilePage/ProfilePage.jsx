import "./ProfilePage.css"
import { Routes, Route } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import ProfileNav from "../../components/ProfileComponent/ProfileNav/ProfileNav";
import ProfileOverview from "../../components/ProfileComponent/ProfileOverview/ProfileOverview";
import ProfileSettings from "../../components/ProfileComponent/ProfileSettings/ProfileSettings";

export default function ProfilePage({user, setUser}) {
    function handleLogOut() {
        userService.logOut();
        setUser(null);
    }
    return (
        <>
            <main className="profile-page-container">
                <section className="profile-page-nav-container">
                    <ProfileNav handleLogOut={handleLogOut}/>
                </section>
                <section className="profile-page-content">
                    <Routes>
                        <Route path="/overview" element={<ProfileOverview user={user}/>}/>
                        <Route path="/settings" element={<ProfileSettings user={user}/>}/>
                    </Routes>
                </section>
            </main>
        </>
    )
}