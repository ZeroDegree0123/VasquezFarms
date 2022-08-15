import "./ProfilePage.css"
import { Routes, Route, Link } from 'react-router-dom';
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import ProfileOverview from "../../components/ProfileOverview/ProfileOverview";
import ProfileSettings from "../../components/ProfileSettings/ProfileSettings";

export default function ProfilePage({user}) {

    return (
        <>
            {/* <main className="profile-page-container">
                <section className="profile-page-nav-container">
                    <ProfileNav/>
                </section>
                <section className="profile-page-content">
                    
                    <Routes>
                        <Route path="/profile/overview" element={<ProfileOverview/>}/>
                        <Route path="/profile/settings" element={<ProfileSettings/>}/>
                    </Routes>
                </section> */}
                <h1 className="profile-page-title">OVERVIEW</h1>
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
                </section>
            {/* </main> */}
        </>
    )
}