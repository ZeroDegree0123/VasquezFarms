import "./ProfilePage.css"
import { Routes, Route } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import ProfileOverview from "../../components/ProfileOverview/ProfileOverview";
import ProfileSettings from "../../components/ProfileSettings/ProfileSettings";

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
                {/* <h1 className="profile-page-title">OVERVIEW</h1>
                <section className="profile-account-container">
                    <h1 className="profile-container-titles">Account Information</h1>
                    <div className="account-subcontainers">
                        <h3 className="account-sub-titles">Username:</h3>
                        <p className="account-user-data">{user.name}</p>
                    </div>
                    <div className="account-subcontainers">
                        <h3 className="account-sub-titles">Email:</h3>
                        <p className="account-user-data">{user.email}</p>
                    </div>
                </section>
                <section className="profile-order-container">
                    <h1 className="profile-container-titles">OrderHistory</h1>
                    <div className="order-subcontainers">
                        <h3 className="account-sub-titles">Previous Orders:</h3>
                        <div className="previous-orders-link-container">
                            <Link to="/orders" className="previous-orders-link"> <strong>PREVIOUS ORDERS</strong></Link>
                        </div>
                    </div>
                </section> */}
            </main>
        </>
    )
}