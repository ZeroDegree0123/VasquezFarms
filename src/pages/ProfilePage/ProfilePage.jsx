import "./ProfilePage.css"
import { getUser } from '../../utilities/users-service';
import { useState } from "react"

export default function ProfilePage() {
    const [user, setUser] = useState([])

    
    return (
        <>
            <main className="profile-page-container">
                <section className="profile-container">
                 
                    <p>Profile page</p>
                </section>
            </main>
        </>
    )
}