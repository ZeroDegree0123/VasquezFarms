import './AboutPage.css'
import { Link } from 'react-router-dom'

export default function AboutPage() {
    return (
        <main className="about-page-container">
            <section id="about-subpage-header" className="subpage-header">
                <h1 className="subpage-header-title">About Us</h1>
                <div className="subpage-header-link-container">
                    <Link id="home-link" className="subpage-header-link-item" to="/">Home</Link>
                    <p id="special-character" className="subpage-header-link-item">&#62;</p>
                    <p className="subpage-header-link-item">About Us</p>
                    <p id="special-character" className="subpage-header-link-item">-</p>
                    <Link className="link" to="/orders/new">
                        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" id="cart" className="bi bi-cart" viewBox="0 0 17 17">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </Link>
                </div>
            </section>
            <section className="about-header-container">
                <div className="about-header-top">
                    <h1 className="about-header-title">About Us</h1>
                </div>
                <div className="about-header-bottom">
                    <p className="about-header-body">
                        Vasquez Farms is a small family farm, we raise goats(meat and dairy), sheep, chickens, 
                        ducks and turkeys.
                    </p>
                </div>
            </section>
            <section className="about-main-container">
                <div className="about-main-top-container">
                    <img id="image-left" className="about-main-images" src="https://imgur.com/aRsYE9f.png" alt="" />
                    <div className="about-main-top-body">
                        <h1 className="about-main-body-titles">MyStory</h1>
                        <p className="about-main-body-bodies">
                            I started making small batch goats milk soap in January 2021 after
                            more than a year of research. I fell in love with the process and began selling to
                            friends and family in May 2020. I love knowing where the products I use on my body
                            come from, and with encouragement and positive feedback from my family and friends 
                            I've branched out to marketing my soap beyond my close circle. I use all natural 
                            ingredients in my soap products. I hope to expand my body care line later this year.
                        </p>
                    </div>
                </div>
                <div className="about-main-bottom-container">
                    <div className="about-main-bottom-body">
                        <h1 className="about-main-body-titles">OUR SECRET</h1>
                        <p className="about-main-body-bodies">
                            Our customers wonder why our soap leaves their skin feeling so soft... Well its all thanks
                            to our secret ingredient Goats Milk. All of our soaps contain Goats Milk and for good reason.
                            Goats Milk is super good for our skin, not only does it provide anti-inflammatory properties, and 
                            is toxin free, but it also leaves your skin feeling soft and moisturized. Do you have sensitive skin? 
                            Well it's no problem, Goats Milk soap is the perfect soap for you.
                        </p>
                    </div>
                    <img id="image-right" className="about-main-images" src="https://imgur.com/8MmSoXg.png" alt="" />
                </div>
            </section>
        </main>
    )
    
}




{/* <div className="about-header-left-body-container">
    <h1 className="about-header-titles">WHO WE ARE</h1>
    <p className="about-header-bodies">
        Vasquez Farms LLC is a small family farm located in Washougal,
        WA. We currently raise goats, (meat and dairy), sheep, chickens, 
        ducks and turkeys. We hope to have vegetable and flower starters available soon!
    </p>
</div>
<div className="about-header-image-container">
    <img className="about-header-image" src="https://imgur.com/ZIK3ZQx.png" alt="" />
</div>
<div className="about-header-right-body-container">
    <h1 className="about-header-titles">A LITTLE ABOUT US</h1>
    <p className="about-header-bodies">
        Although we both have full time jobs off the farm, my husband and I 
        are homesteaders at heart! We enjoy caring for our many animals, love to garden, and hope to one day produce most of our own 
        food. We hope to grow and potentially expand our products.
    </p>
</div> */}