import './AboutPage.css'

export default function AboutPage() {
    return (
        <main className="about-page-container">
            <section className="about-header-container">
                <div className="about-header-left-body-container">
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
                        food. We hope to grow and potntially expand our products.
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
                            ingredients in my soap products. I hope to expand my body care line later this year!
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
            <section className="about-contact-container">
                <h1>FEEL FREE TO CONTACT US</h1>
                <div className="about-contact-body-container">
                    <div className="contact-cards">
                        <h1 className="contact-card-titles">PHONE</h1>
                        <a className="contact-card-links" href="">link(not available)</a>
                    </div>
                    <div className="contact-cards">
                        <h1 className="contact-card-titles">EMAIL</h1>
                        <a className="contact-card-links" href="">link(not available)</a>
                    </div>
                </div>
            </section>
        </main>
    )
    
}



