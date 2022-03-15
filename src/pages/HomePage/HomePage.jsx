import './HomePage.css'

export default function HomePage() {
    return (
        <>
            <section>
                <div className="container-fluid" id="home-container">
                    <div className="row align-items-center">
                        <div class="col">
                            <img className="images rounded float-start img-thumbnail" src="https://imgur.com/0X6IChc.png" alt="" />
                        </div>
                        <div class="col">
                            <h3 className="feel">Feel Clean, Smell Clean</h3>
                            <p>Natural Ingredients, Wide variety, Straight From The Farm</p> 
                        </div>
                        <div class="col">
                            <img className="images rounded float-end img-thumbnail" src="https://imgur.com/GmIZZey.png" alt="" />   
                        </div>
                    </div>
                    {/* <img src="https://imgur.com/QRa4zI1.png" alt="" /> */}
                </div>
            </section>
        </>
    )
}