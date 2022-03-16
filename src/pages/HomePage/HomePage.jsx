import './HomePage.css'
import { Link } from 'react-router-dom';

export default function HomePage() {
    return (
        <>
            <section>
                <div className="container-fluid" id="home-container-top">
                        <h1>
                            Welcome To VasquezFarms LLC
                        </h1>
                    <div className="row align-items-center" id="second-container">
                        <div className="col"> 
                            <img className="rounded img-fluid" id="main-image" src="https://imgur.com/Llsrq0i.png" alt="" />
                        </div>
                        <div className="col" id="statement">
                            <h3 className="feel"><strong>Feel Clean, Smell Clean</strong></h3>
                            <p id="paragraph">Natural Ingredients, Wide variety, Straight From The Farm.</p> 
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section>
                <div className="container-fluid" id="home-container-middle">
                    <div className="row align-items-center ">
                        <div class="col" >
                            <h3 className="brand-statement rounded">Our Soaps Are Made With Goats Milk and All Natural Ingredients</h3> 
                        </div>
                    </div>
                </div>
            </section>
            <hr />
            <section>
                <h3 id="best">Best Sellers</h3>
            </section>
            <section>
                <div className="container-fluid" id="home-container-middle">
                    <div className="row align-items-center">
                        <div class="col">
                            <Link className="link" to="/soaps">
                                <img className="images rounded float-start img-thumbnail" src="https://imgur.com/0X6IChc.png" alt="" />
                            </Link>
                        </div>
                        <div class="col">
                            <Link className="link" to="/soaps">
                                <img className="images rounded float-start img-thumbnail" src="https://imgur.com/bmQHIeI.png" alt="" />
                            </Link>
                        </div>
                        <div class="col">
                            <Link className="link" to="/soaps">
                                <img className="images rounded float-end img-thumbnail" src="https://imgur.com/GmIZZey.png" alt="" />   
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}