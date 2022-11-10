import './HomeOrderCard.css'

export default function HomeOrderCard({soap}) {
    return (
        <>
            <div className="home-order-soap-card">
                <div className="home-order-left">
                    <img className="home-order-image" src={soap.image} alt="" />
                </div>
                <div className="home-order-right">
                    <h1 className="home-order-seasonal">{soap.category}</h1>
                    <div className="home-order-body-container">
                        <h1 className="home-order-soap-name">{soap.name}</h1>
                        <p className="home-order-soap-description">{soap.description}</p>
                    </div>
                    <button className="home-order-button">ORDER</button>
                </div>
            </div>
        </>
    )
}
