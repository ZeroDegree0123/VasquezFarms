import "./ProfilePage.css"
import { getUser } from '../../utilities/users-service';
import { useState } from "react";
import { Link } from "react-router-dom"; 

export default function ProfilePage({user}) {

    return (
        <>
            <main className="profile-page-container">
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
            </main>
        </>
    )
}