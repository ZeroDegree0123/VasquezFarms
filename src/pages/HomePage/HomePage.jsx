import './HomePage.css'
import { Link } from 'react-router-dom';
import HomeOrderComponent from '../../components/HomeOrderComponent/HomeOrderComponent';

export default function HomePage({soaps}) {

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
                {/* <div className="divider"></div> */}
                <section>
                    <div className="spacer"></div>
                </section>
                <section className="home-order-container">
                      <HomeOrderComponent/>
                </section>
                <h1 className="home-feature-title">FEATURED</h1>
                <section className="home-feature-container">
                    <Link className="home-feature-cards" to="/soaps/634c48301fea53e138c37a86">
                        <img className="home-feature-card-image" src="https://imgur.com/GmIZZey.png" alt="" />
                        <h1 className="home-feature-card-title">Black Jasmine</h1>
                        <p className="home-feature-card-description">This is a sophisticated mix of bergamot, cassis, rose, neroli, jasmine, and smoky musk.</p>
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