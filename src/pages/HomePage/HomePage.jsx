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
                    <div id="left-order-container" className="home-order-image-container">
                        <div className="home-order-image-subcontainer">
                            <h1 className="home-order-image-titles">Natural</h1>
                            <img className="home-order-images" src="https://imgur.com/zCJ3siV.png" alt="" />
                        </div>
                        <div className="home-order-image-subcontainer">
                            <h1 className="home-order-image-titles">Fruity</h1>
                            <img className="home-order-images" src="https://imgur.com/lVLFgX0.png" alt="" />
                        </div>
                    </div>
                    <div className="home-order-body-container">
                        <h1 className="home-order-body-title">START EXPLORING</h1>
                        <p className="home-order-body">We have a wide variety of different scents, and check out our seasonals
                            before they go
                        </p>
                        <a className="home-order-body" id="home-order-button" href="/soaps">ORDER NOW</a>
                    </div>
                    <div id="right-order-container" className="home-order-image-container">
                        <div className="home-order-image-subcontainer">
                            <h1 className="home-order-image-titles">Floral</h1>
                            <img className="home-order-images" src="https://imgur.com/uXs82zm.png" alt="" />
                        </div>
                        <div className="home-order-image-subcontainer">
                            <h1 className="home-order-image-titles">Masculine</h1>
                            <img className="home-order-images" src="https://imgur.com/6Z4SmwJ.png" alt="" />
                        </div>
                    </div>
                </section>
                <h1 className="home-feature-title">FEATURED</h1>
                <section className="home-feature-container">
                    <div className="home-feature-subcontainers">
                        <Link className="home-feature-links" to="/soaps/62d9bf111145ef5d44129a50">
                            <h1 id="home-feature-image-titles-lrg">Black Jasmine</h1>
                            <img id="home-feature-image-lrg" src="https://imgur.com/GmIZZey.png"/>
                        </Link>
                    </div>
                    <div className="home-feature-subcontainers">
                        <Link className="home-feature-links" to="/soaps/62313d4be51f3213c011d4a2">
                            <h1 className="home-feature-image-titles">Sea Salt Agave</h1>
                            <img className="home-feature-images" src="https://imgur.com/Rcmqln0.png"/>
                        </Link>
                        <Link className="home-feature-links" to="/soaps/62d9be8c1145ef5d44129a4d">
                            <h1 className="home-feature-image-titles">Rejuvination</h1>
                            <img className="home-feature-images" src="https://imgur.com/4jCRkug.png"/>
                        </Link>
                    </div>
                    <div className="home-feature-subcontainers">
                        <Link className="home-feature-links" to="/soaps/62d9bd731145ef5d44129a47">
                            <h1 className="home-feature-image-titles">Black Rasberry</h1>
                            <img className="home-feature-images" src="https://imgur.com/PtNeTrK.png"/>
                        </Link>
                        <Link className="home-feature-links" to="/soaps/62d9bdc91145ef5d44129a49">
                            <h1 className="home-feature-image-titles">Lemon Loaf</h1>
                            <img className="home-feature-images" src="https://imgur.com/hFmEvN3.png"/>   
                        </Link>
                    </div>
                </section>
            </main>
        </>
    )
}