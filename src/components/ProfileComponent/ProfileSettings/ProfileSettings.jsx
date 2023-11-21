import "./ProfileSettings.css"

export default function ProfileSettings({ user }) {
    return (
        <>
            <main className="settings-container">
                <h1 className="settings-title">Account Settings</h1>
                <section className="setting-sections">
                    <div className="setting-content">
                        <h1>User Information</h1>
                        <p className="user-information">UserName: <span>{user.name}</span></p>
                        <p className="user-information">Email: <span>{user.email}</span></p>
                        {/* <p className="user-information">Address: <span>{user.address}</span></p> */}
                    </div>
                </section>
                <section className="setting-sections">
                    <div className="setting-content">
                        <h1>Delete Account</h1>
                        {/* <p>"COMING SOON"</p> */}
                    </div>
                </section>
            </main>
        </>
    )
}