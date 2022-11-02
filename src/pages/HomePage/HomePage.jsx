import './HomePage.css'
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <main className="home-page-container">
                <section className="home-header-container">
                    <div className="home-header-body-container">
                        <h1 id="home-header-body-title" className="home-header-body">WELCOME TO VASQUEZ FARMS LLC</h1>
                        <h3 id="home-header-body-subtitle" className="home-header-body"><strong>Feel Clean, Smell Clean</strong></h3>
                        <p id="home-header-body-body" className="home-header-body">Natural Ingredients, Wide variety, Straight From The Farm.</p>
                    </div>
                </section>
                <section className="home-order-container">
                    <div className="home-order-left">
                        <img className="home-order-image" src="https://imgur.com/GmIZZey.png" alt="" />
                    </div>
                    <div className="home-order-right">
                        <h1 className="home-order-seasonal">Floral Scents</h1>
                        <div className="home-order-body-container">
                            <h1 className="home-order-soap-name">Black Jasmine</h1>
                            <p className="home-order-soap-description">A mixture of bergamot, cassis, rose, jasmine, and more. That provides a thourough but gentle exfoliation.</p>
                        </div>
                        <button className="home-order-button">ORDER</button>
                    </div>
                </section>
                {/* <section className="home-order-container">
                    <div id="left-order-container" className="home-order-image-container">
                        <div className="home-order-image-subcontainer">
                            <h1 className="home-order-image-titles">Natural</h1>
                            <img className="home-order-images" src="https://imgur.com/zCJ3siV.png" alt="images"/>
                        </div>
                        <div className="home-order-image-subcontainer">
                            <h1 className="home-order-image-titles">Fruity</h1>
                            <img className="home-order-images" src="https://imgur.com/lVLFgX0.png" alt="images"/>
                        </div>
                    </div>
                    <div className="home-order-body-container">
                        <h1 className="home-order-body-title">START EXPLORING</h1>
                        <p className="home-order-body">Come check out our wide variety of scents </p>
                        <p className="home-order-body">And be sure to see our Seasonals before they go</p>
                        <a className="home-order-body" id="home-order-button" href="/soaps">ORDER NOW</a>
                    </div>
                    <div id="right-order-container" className="home-order-image-container">
                        <div className="home-order-image-subcontainer">
                            <h1 className="home-order-image-titles">Floral</h1>
                            <img className="home-order-images" src="https://imgur.com/uXs82zm.png" alt="images"/>
                        </div>
                        <div className="home-order-image-subcontainer">
                            <h1 className="home-order-image-titles">Masculine</h1>
                            <img className="home-order-images" src="https://imgur.com/6Z4SmwJ.png" alt="images"/>
                        </div>
                    </div>
                </section> */}
                <h1 className="home-feature-title">FEATURED</h1>
                <section className="home-feature-container">
                    <div className="home-feature-subcontainers">
                        <Link className="home-feature-links" to="/soaps/634c48301fea53e138c37a86">
                            <h1 id="home-feature-image-titles-lrg">Black Jasmine</h1>
                            <img id="home-feature-image-lrg" src="https://imgur.com/GmIZZey.png" alt="images"/>
                        </Link>
                    </div>
                    <div className="home-feature-subcontainers">
                        <Link className="home-feature-links" to="/soaps/634c46001fea53e138c37a70">
                            <h1 className="home-feature-image-titles">Sea Salt Agave</h1>
                            <img className="home-feature-images" src="https://imgur.com/Rcmqln0.png" alt="images"/>
                        </Link>
                        <Link className="home-feature-links" to="/soaps/634c46831fea53e138c37a79">
                            <h1 className="home-feature-image-titles">Rejuvination</h1>
                            <img className="home-feature-images" src="https://imgur.com/4jCRkug.png" alt="images"/>
                        </Link>
                    </div>
                    <div className="home-feature-subcontainers">
                        <Link className="home-feature-links" to="/soaps/634c49951fea53e138c37a99">
                            <h1 className="home-feature-image-titles">Black Rasberry</h1>
                            <img className="home-feature-images" src="https://imgur.com/PtNeTrK.png" alt="images"/>
                        </Link>
                        <Link className="home-feature-links" to="/soaps/634c49ca1fea53e138c37a9b">
                            <h1 className="home-feature-image-titles">Lemon Loaf</h1>
                            <img className="home-feature-images" src="https://imgur.com/hFmEvN3.png" alt="images"/>   
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}