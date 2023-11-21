import "./ProfileOverview.css"

export default function ProfileOverview({ user }) {
    return (
        <>
            <main className="overview-container">
                <h1 className="overview-title">OVERVIEW</h1>
                <section className="overview-sections">
                    <div className="overview-content">
                        <h1>Previous Orders</h1>
                        <a className="orderhistory-link" href="/orders">View Orders</a>
                    </div>
                </section>
                <section className="overview-sections">
                    <div className="overview-content">
                        <h1>Rewards stats</h1>
                        {/* <p>"COMING SOON"</p> */}
                    </div>
                </section>
            </main>
        </>
    )
}