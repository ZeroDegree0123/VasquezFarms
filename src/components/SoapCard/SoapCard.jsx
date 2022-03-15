import { Link } from "react-router-dom"
import './SoapCard.css'

export default function SoapCard({soap, handleAddToOrder}) {
    return (
        <>
            <section className="">
                <div className="card mb-3" id="soap-card" >
                    <Link className="soap-link" to={`/soaps/${soap._id}`}>
                        <img src={soap.image} alt="img" className="card-img-top"/>   
                        <h1 className="card-title">
                            {soap.name}
                        </h1>
                        <p className="card-text" id="soap-description">
                            {soap.description}
                        </p>
                        <h4 className="card-text d-flex justify-content-start" id="soap-price">
                            ${soap.price}.00
                        </h4>
                    </Link>
                    <button id="soap-button" className="btn btn-lg" onClick={() => handleAddToOrder(soap._id)}>ADD TO CART</button> 
                </div>         
            </section> 
        </>
    )
}