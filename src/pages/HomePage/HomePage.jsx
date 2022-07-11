import './HomePage.css'
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <section className="home-header-container">
                <div className="home-header-image-container"> 
                    <img className="home-header-image" src="https://imgur.com/Llsrq0i.png" alt="" />
                </div>
                <div className="home-header-body-container">
                    <h1 className="home-header-body">WELCOME TO VASQUEZ FARMS LLC</h1>
                    <h3 className="home-header-body"><strong>Feel Clean, Smell Clean</strong></h3>
                    <p className="home-header-body">Natural Ingredients, Wide variety, Straight From The Farm.</p> 
                </div>
            </section>
            <section className="home-order-container">
                <div className="home-gradient-left"></div>
                <div className="home-order-body-container">
                    <h1 className="home-order-body">START EXPLORING</h1>
                    <p className="home-order-body">We have a wide variety of different scents, and check out our seasonals
                        before they go
                    </p>
                    <button className="home-order-body" id="home-order-button">ORDER NOW</button>
                </div>
                <div className="home-gradient-right"></div>
            </section>
            <h1 className="home-feature-title">FEATURED</h1>
            <section className="home-feature-container">
                    <Link id="link-1" className="home-feature-links" to="/soaps">
                        <h1 className="home-feature-image-titles">TITLEs</h1>
                        <img className="home-feature-images" src="https://imgur.com/0X6IChc.png" alt="" />
                    </Link>
                    <Link id="link-2" className="home-feature-links" to="/soaps">
                        <h1 className="home-feature-image-titles">TITLEs</h1>
                        <img className="home-feature-images" src="https://imgur.com/0X6IChc.png" alt="" />
                    </Link>
                    <Link id="link-3" className="home-feature-links" to="/soaps">
                        <h1 className="home-feature-image-titles">TITLEs</h1>
                        <img className="home-feature-images" src="https://imgur.com/0X6IChc.png" alt="" />
                    </Link>
                    <Link id="link-4" className="home-feature-links" to="/soaps">
                        <h1 className="home-feature-image-titles">TITLEs</h1>
                        <img className="home-feature-images" src="https://imgur.com/bmQHIeI.png" alt="" />
                    </Link>
                    <Link id="link-5" className="home-feature-links" to="/soaps">
                        <h1 className="home-feature-image-titles">TITLEs</h1>
                        <img className="home-feature-images" src="https://imgur.com/GmIZZey.png" alt="" />   
                    </Link>
            </section>
        </>
    )
}