import './AboutPage.css'

export default function AboutPage() {
    return (
        <section id="about-main">

            <div className="container-fluid" id="about-containers">
                <div className="row align-items-center">
                    <div className="col">
                        <img className="rounded img-fluid img-thumbnail" id="about-img" src="https://imgur.com/JOr47gh.png" alt="" />
                    </div>
                    <div className="col">
                        <h2 className="about-p-h2" id="about-h4"><strong>Who We Are</strong></h2>
                        <p className="about-p">Vasquez Farms LLC is a small family farm located in Washougal,
                            WA.  We currently raise goats, (meat and dairy), sheep, chickens, 
                            ducks and turkeys.  We hope to have vegetable and flower starts available soon!
                        </p>
                    </div>
                </div>
            </div>
            <div className="container-fluid" id="about-containers-r">
                <div className="row align-items-center">
                    <div className="col">
                        <h2 className="about-p-r-h2" id="about-h4"><strong>My Soap Story</strong></h2>
                        <p className="about-p-r">I started making small batch goats milk soap in January 2021 after
                            more than a year of research. I fell in love with the process and began selling to
                            friends and family in May 2020.  I love knowing where the products I use on my body
                            come from, and with encouragement and positive feedback from my family and friends 
                            I've branched out to marketing my soap beyond my close circle. I use all natural 
                            ingredients in my soap products. I hope to expand my body care line later this year!
                        </p>
                    </div>
                    <div className="col">
                        <img className="rounded img-fluid img-thumbnail" id="about-img" src="https://imgur.com/jTUGRUb.png" alt="" />
                    </div>
                </div>
                
            </div>
            <div className="container-fluid" id="about-containers">
                <div className="row align-items-center">
                    <div className="col">
                        <img className="rounded img-fluid img-thumbnail" id="about-img" src="https://imgur.com/xvoBri7.png" alt="" />
                    </div>
                    <div className="col">
                    <h2 className="about-p-h2" id="about-h4"><strong>About The farmers</strong></h2>
                        <p className="about-p">
                        Although we both have full time jobs off the farm, my husband and I 
                        are homesteaders at heart!  We enjoy caring for our many animals, building structures for 
                        them and expanding our farm. I love to garden, and hope to one day produce most of our own 
                        food. My husband has recently started wood working, I hope to be able to begin selling some 
                        of his creations in the near future.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}