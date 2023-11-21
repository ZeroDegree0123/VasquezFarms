import './HomePage.css'
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import NavBar from '../../components/NavBar/NavBar';
import HomeOrderComponent from '../../components/HomeOrderComponent/HomeOrderList/HomeOrderList';

export default function HomePage({ redirect, user, cart, setCart }) {
    const [categoryCards, setCategoryCards] = useState([0, 1, 2, 3])

    return (
        <>
            <main className="home-page-container">
                <section className="home-header-container">
                    <NavBar user={user} cart={cart} setCart={setCart} />
                    <h1 className="home-header-title">Bellamoon Soaps</h1>
                </section>
                <section className="home-hook-container">
                    <div className="hook-card">
                        <img className="hook-card-icon" src="https://imgur.com/5XSo0UT.png" alt="" />
                        <h2 className="hook-card-header">Bubbly</h2>
                        <p className="hook-card-body">All our soaps are super bubbly. We know how much our customers love the suds, so we made sure to make our soap super soapy, leaving you clean!</p>
                    </div>
                    <div className="hook-card">
                        <img className="hook-card-icon" src="https://imgur.com/F4zz4Ga.png" alt="" />
                        <h2 className="hook-card-header">Exfoliating</h2>
                        <p className="hook-card-body">We add natural exfoliating ingredients to our select soap to give you the scrub you need. Some of the ingredients include coffee grains and poppy seeds</p>
                    </div>
                    <div className="hook-card">
                        <img className="hook-card-icon" src="https://imgur.com/uE4I9d6.png" alt="" />
                        <h2 className="hook-card-header">Hydrating</h2>
                        <p className="hook-card-body">Clean and fresh is our motto. Our soaps leave you feeling renewed with a feeling of silky smoothness. All bar soaps will give a nice hydrated sensation</p>
                    </div>
                </section>
                <section className="home-order-container">
                    <HomeOrderComponent redirect={redirect} categoryCards={categoryCards} />

                </section>
                <h1 className="home-feature-title">FEATURED</h1>
                <section className="home-feature-container">
                    <Link className="home-feature-cards" to="/soaps/634c48301fea53e138c37a86">
                        <img className="home-feature-card-image" src="https://imgur.com/GmIZZey.png" alt="" />
                        <h1 className="home-feature-card-title">Black Jasmine</h1>
                        <p className="home-feature-card-description">This is a sophisticated mix of bergamot, cassis, rose, neroli, jasmine, and smoky musk. Best seller!</p>
                        <p className="home-feature-card-view">view</p>
                    </Link>
                    <Link className="home-feature-cards" to="/soaps/634c46831fea53e138c37a79">
                        <img className="home-feature-card-image" src="https://imgur.com/4jCRkug.png" alt="" />
                        <h1 className="home-feature-card-title">Rejuvination</h1>
                        <p className="home-feature-card-description">A fresh mix of eucalyptus, bergamot, citrus, tea tree, mint, geranium, musk, amber, sandalwood, and moss.</p>
                        <p className="home-feature-card-view">view</p>
                    </Link>
                    <Link className="home-feature-cards" to="/soaps/634c46001fea53e138c37a70">
                        <img className="home-feature-card-image" src="https://imgur.com/Rcmqln0.png" alt="" />
                        <h1 className="home-feature-card-title">Sea Salt Agave</h1>
                        <p className="home-feature-card-description">Blended with hints of driftwood and sea moss. French green clay has been added for a blissful cleansing.</p>
                        <p className="home-feature-card-view">view</p>
                    </Link>
                </section>
            </main>
        </>
    )
}

// {/* <div className="home-feature-subcontainers">
//     <Link className="home-feature-links" to="/soaps/634c48301fea53e138c37a86">
//         <h1 id="home-feature-image-titles-lrg">Black Jasmine</h1>
//         <img id="home-feature-image-lrg" src="https://imgur.com/GmIZZey.png" alt="images"/>
//     </Link>
// </div>
// <div className="home-feature-subcontainers">
//     <Link className="home-feature-links" to="/soaps/634c46001fea53e138c37a70">
//         <h1 className="home-feature-image-titles">Sea Salt Agave</h1>
//         <img className="home-feature-images" src="https://imgur.com/Rcmqln0.png" alt="images"/>
//     </Link>
//     <Link className="home-feature-links" to="/soaps/634c46831fea53e138c37a79">
//         <h1 className="home-feature-image-titles">Rejuvination</h1>
//         <img className="home-feature-images" src="https://imgur.com/4jCRkug.png" alt="images"/>
//     </Link>
// </div>
// <div className="home-feature-subcontainers">
//     <Link className="home-feature-links" to="/soaps/634c49951fea53e138c37a99">
//         <h1 className="home-feature-image-titles">Black Rasberry</h1>
//         <img className="home-feature-images" src="https://imgur.com/PtNeTrK.png" alt="images"/>
//     </Link>
//     <Link className="home-feature-links" to="/soaps/634c49ca1fea53e138c37a9b">
//         <h1 className="home-feature-image-titles">Lemon Loaf</h1>
//         <img className="home-feature-images" src="https://imgur.com/hFmEvN3.png" alt="images"/>   
//     </Link>
// </div> */}